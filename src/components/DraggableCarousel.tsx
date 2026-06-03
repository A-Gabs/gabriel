import React, { useRef, useEffect, useState } from "react";

interface CardItem {
  id: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

interface DraggableCarouselProps {
  items: CardItem[];
  activeId: string | null;
  setActiveId: React.Dispatch<React.SetStateAction<string | null>>;
  renderCard: (card: CardItem, uniqueId: string) => React.ReactNode;
}

export default function DraggableCarousel({
  items,
  activeId,
  setActiveId,
  renderCard
}: DraggableCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  const isDraggingRef = useRef(false);
  const [isGrabbing, setIsGrabbing] = useState(false);

  const shouldLoop = false;

  // We duplicate the items 5 times to make an infinite looping scroll seamless, only if shouldLoop is true
  const multipliedItems = shouldLoop
    ? [...items, ...items, ...items, ...items, ...items]
    : items;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    if (!shouldLoop) {
      // Force scroll reset to 0 to align all carousels perfectly on load and avoid browser scroll memory side-effects
      el.scrollLeft = 0;

      // Delay-based safety reset checkpoints for asynchronous layout rendering and browser restorations
      const resets = [20, 100, 300, 600];
      const timers = resets.map(delay => setTimeout(() => {
        el.scrollLeft = 0;
      }, delay));

      return () => {
        timers.forEach(clearTimeout);
      };
    }

    // Run layout centering after components settle using exact mathematical offsets
    const handleResize = () => {
      const N = items.length;
      const setDistance = N * 216; // 200px card width + 16px gap (gap-4)
      el.scrollLeft = 2 * setDistance;
    };

    const timer = setTimeout(handleResize, 50);

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(timer);
    };
  }, [items.length, shouldLoop]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || items.length === 0 || !shouldLoop) return;

    const N = items.length;
    const setDistance = N * 216; // 200px card width + 16px gap (gap-4)

    const leftBoundary = setDistance;
    const rightBoundary = 3 * setDistance;

    // Loop bounds check
    if (el.scrollLeft < leftBoundary) {
      el.scrollLeft += setDistance;
    } else if (el.scrollLeft > rightBoundary) {
      el.scrollLeft -= setDistance;
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = containerRef.current;
    if (!el) return;

    isDownRef.current = true;
    setIsGrabbing(true);
    isDraggingRef.current = false;
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftRef.current = el.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current) return;
    const el = containerRef.current;
    if (!el) return;

    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Drag sensitivity in pixel multiplier

    if (Math.abs(walk) > 8) {
      isDraggingRef.current = true;
    }

    el.scrollLeft = scrollLeftRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
    setIsGrabbing(false);
    // Add small delay to prevent click fire if they just finished dragging
    setTimeout(() => {
      isDraggingRef.current = false;
    }, 50);
  };

  const handleCardClickProxy = (id: string, e: React.MouseEvent) => {
    // If the mouse was dragged, discard the click
    if (isDraggingRef.current) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }

    const target = e.target as HTMLElement;
    if (target.closest("button") || target.closest("a")) {
      return;
    }

    setActiveId(prev => prev === id ? null : id);
  };

  return (
    <div 
      ref={containerRef}
      onScroll={handleScroll}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave}
      className={`flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar select-none active:cursor-grabbing ${
        isGrabbing ? "cursor-grabbing" : "cursor-grab"
      }`}
      style={{ scrollBehavior: isGrabbing ? "auto" : "smooth" }}
    >
      {multipliedItems.map((card, index) => {
        const uniqueId = `${card.id}-idx-${index}`;
        return (
          <div 
            key={uniqueId}
            onClick={(e) => handleCardClickProxy(card.id, e)}
            className="flex-shrink-0"
          >
            {renderCard(card, uniqueId)}
          </div>
        );
      })}
    </div>
  );
}
