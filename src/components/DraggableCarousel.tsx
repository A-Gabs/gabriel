import React, { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const [activeDotIndex, setActiveDotIndex] = useState(0);

  const shouldLoop = false;

  // We duplicate the items 5 times to make an infinite looping scroll seamless, only if shouldLoop is true
  const multipliedItems = shouldLoop
    ? [...items, ...items, ...items, ...items, ...items]
    : items;

  const updateArrowVisibility = () => {
    const el = containerRef.current;
    if (!el) return;
    setShowLeftArrow(el.scrollLeft > 10);
    setShowRightArrow(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);

    const cardWidth = 216; // 200px card width + 16px gap
    const index = Math.round(el.scrollLeft / cardWidth);
    setActiveDotIndex(Math.max(0, Math.min(items.length - 1, index)));
  };

  const scrollToItem = (index: number) => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 216; // 200px card width + 16px gap
    el.scrollTo({ left: index * cardWidth, behavior: "smooth" });
  };

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
        updateArrowVisibility();
      }, delay));

      el.addEventListener("scroll", updateArrowVisibility);
      // Let's do an initial update in case items take keyframes to render
      updateArrowVisibility();

      window.addEventListener("resize", updateArrowVisibility);

      return () => {
        timers.forEach(clearTimeout);
        el.removeEventListener("scroll", updateArrowVisibility);
        window.removeEventListener("resize", updateArrowVisibility);
      };
    }

    // Run layout centering after components settle using exact mathematical offsets
    const handleResize = () => {
      const N = items.length;
      const setDistance = N * 216; // 200px card width + 16px gap (gap-4)
      el.scrollLeft = 2 * setDistance;
      updateArrowVisibility();
    };

    const timer = setTimeout(handleResize, 50);

    el.addEventListener("scroll", updateArrowVisibility);
    window.addEventListener("resize", handleResize);
    window.addEventListener("resize", updateArrowVisibility);
    return () => {
      el.removeEventListener("scroll", updateArrowVisibility);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", updateArrowVisibility);
      clearTimeout(timer);
    };
  }, [items.length, shouldLoop]);

  const handleScroll = () => {
    const el = containerRef.current;
    if (!el || items.length === 0) return;

    updateArrowVisibility();

    if (!shouldLoop) return;

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

  const scrollByDirection = (direction: "left" | "right") => {
    const el = containerRef.current;
    if (!el) return;
    const cardWidth = 216; // 200px card width + 16px gap
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;
    el.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative w-full group/carousel flex flex-col gap-2">
      <div className="relative w-full">
        {/* Left Navigation Arrow */}
        {showLeftArrow && (
          <button
            onClick={() => scrollByDirection("left")}
            className="absolute -left-3 top-[calc(50%-16px)] -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#1a1a1a] shadow-md border border-[#1a1a1a]/10 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer hidden md:flex"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {/* Right Navigation Arrow */}
        {showRightArrow && (
          <button
            onClick={() => scrollByDirection("right")}
            className="absolute -right-3 top-[calc(50%-16px)] -translate-y-1/2 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/95 text-[#1a1a1a] shadow-md border border-[#1a1a1a]/10 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer hidden md:flex"
            aria-label="Siguiente"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}

        <div 
          ref={containerRef}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          onMouseLeave={handleMouseUpOrLeave}
          className={`flex overflow-x-auto gap-4 pb-4 ${isGrabbing ? "" : "snap-x snap-mandatory"} no-scrollbar select-none active:cursor-grabbing ${
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
      </div>

      {/* Pagination Dots */}
      {items.length > 1 && (
        <div className="flex justify-center items-center gap-1.5 pb-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToItem(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeDotIndex === i 
                  ? "w-4 bg-[#1a1a1a]/50" 
                  : "w-1.5 bg-[#1a1a1a]/15 hover:bg-[#1a1a1a]/30"
              }`}
              aria-label={`Ir a tarjeta ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
