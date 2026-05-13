import React from "react";
import { useInView } from "../hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  /** Delay in ms before the animation starts — use for staggered children */
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

/**
 * Wraps any content and fades it in from below when it enters the viewport.
 * Uses IntersectionObserver via the useInView hook — no deps required.
 *
 * Usage:
 *   <FadeIn delay={100}><MyCard /></FadeIn>
 */
const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const style: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
  };

  return (
    // @ts-expect-error — dynamic tag typing
    <Tag ref={ref} style={style} className={className}>
      {children}
    </Tag>
  );
};

export default FadeIn;
