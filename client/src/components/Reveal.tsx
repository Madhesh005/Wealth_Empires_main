import { PropsWithChildren, createElement } from "react";
import { useInView } from "@/hooks/use-in-view";

type RevealProps = PropsWithChildren<{
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
  className?: string;
  offset?: string; // rootMargin style, e.g. "0px 0px -10% 0px"
  once?: boolean;
  animation?: "fade-up" | "fade-in" | "zoom-in" | "slide-left" | "slide-right";
}>;

export default function Reveal({
  as: Tag = "div",
  delayMs = 0,
  className = "",
  offset = "0px 0px -10% 0px",
  once = true,
  animation = "fade-up",
  children,
}: RevealProps) {
  const { ref, inView } = useInView<HTMLDivElement>({ rootMargin: offset, once });

  const base = "reveal opacity-0 will-change-transform";
  const shown = inView ? "reveal--shown" : "";
  const animClass = `reveal-${animation}`;
  const style = { transitionDelay: `${Math.max(0, delayMs)}ms` } as const;

  return createElement(
    Tag as any,
    { ref: ref as any, className: `${base} ${animClass} ${shown} ${className}`, style },
    children
  );
}