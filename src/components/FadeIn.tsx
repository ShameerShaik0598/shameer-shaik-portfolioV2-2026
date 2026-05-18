import React from "react";
import { useInView } from "../hooks/useInView";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;   // ← add this line
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
    style: extraStyle = {},
  as: Tag = "div",
}) => {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });


  // return (
  //   // @ts-expect-error — dynamic tag typing
  //   <Tag ref={ref} style={style} className={className}>
   const animStyle: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(22px)",
    transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    ...extraStyle,   // ← merges height:"100%" or any passed style
  };

  return (
    // @ts-expect-error — dynamic tag typing
    <Tag ref={ref} style={animStyle} className={className}>
      {children}
    </Tag>
  );
};

export default FadeIn;
