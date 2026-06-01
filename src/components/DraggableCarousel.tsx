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

  // We duplicate the items 5 times to make an infinite looping scroll seamless
  const multipliedItems = [
    ...items,
    ...items,
    ...items,
    ...items,
    ...items
  ];

  useEffect(() => {
    const el = containerRef.current;
    if (!el || items.length === 0) return;

    // Set scroll position to the safe middle set on mount
    const singleSetWidth = el.scrollWidth / 5;
    el.scrollLeft = singleSetWidth * 2;

    // Dynamic scale adjustment if needed
    const handleResize = () => {
      const setW = el.scrollWidth / 5;
      el.scrollLeft = setW * 2;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [items.length]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || items.length === 0) return;

    const singleSetWidth = el.scrollWidth / 5;

    // Loop bounds check
    if (el.scrollLeft < singleSetWidth) {
      // If they scrolled too far left, shift seamlessly to the right middle set
      el.scrollLeft += singleSetWidth * 2;
    } else if (el.scrollLeft > singleSetWidth * 3) {
      // If they scrolled too far right, shift seamlessly to the left middle set
      el.scrollLeft -= singleSetWidth * 2;
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
      className={`flex overflow-x-auto gap-4 pb-4 px-6 -mx-6 snap-x snap-mandatory no-scrollbar select-none active:cursor-grabbing ${
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
