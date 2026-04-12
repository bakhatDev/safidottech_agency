"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation(
  animationFn: (el: HTMLElement) => void,
  deps: unknown[] = []
) {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!ref.current) return;
    
    animationFn(ref.current);
    
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  
  return ref;
}
