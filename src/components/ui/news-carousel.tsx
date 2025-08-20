// components/newsroom-carousel.tsx
"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type NewsItem = {
  id: string;
  title: string;
  imageSrc: string;
  link: string;
};

type Props = {
  items: NewsItem[];
  title?: string;
};

export function NewsroomCarousel({ items, title = "Newsroom" }: Props) {
  const scrollerRef = React.useRef<HTMLDivElement>(null);

  function scrollByDir(dir: "left" | "right") {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.9); // almost a full viewport of cards
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  }

  return (
    <section className="w-full">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="tracking-tight">{title}</h2>

        <div className="flex gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Scroll left"
            onClick={() => scrollByDir("left")}
            className="cursor-pointer"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Scroll right"
            onClick={() => scrollByDir("right")}
            className="cursor-pointer"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="
          flex gap-6 overflow-x-auto scroll-smooth
          [scrollbar-width:none] [-ms-overflow-style:none]
          [&::-webkit-scrollbar]:hidden
          snap-x snap-mandatory
          pb-2
        "
        aria-label={`${title} articles`}
      >
        {items.map((item) => (
          <a href={item.link} key={item.id} target="_blank">
            <article
              key={item.id}
              className="
                snap-start
                min-w-[290px] sm:min-w-[340px] lg:min-w-[320px]
                max-w-[90vw]
              "
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, 420px"
                  priority={false}
                />
              </div>
              <p className="text-medium font-semibold mt-4">{item.title}</p>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
}
