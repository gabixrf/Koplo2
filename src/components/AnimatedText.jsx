import { useEffect, useRef } from "react";
import SplitType from "split-type";

export default function AnimatedText({
  text,
  className = "",
  delay = 50,
  duration = 1,
  ease = "ease-out",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  splitType = "chars",
  textAlign = "center",
  tag = "p",
  onLetterAnimationComplete,
}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const split = new SplitType(ref.current, {
      types: splitType,
    });

    const targets =
      split.chars?.length
        ? split.chars
        : split.words?.length
        ? split.words
        : split.lines;

    targets.forEach((el, index) => {
      el.style.opacity = from.opacity;
      el.style.transform = `translateY(${from.y}px)`;

      setTimeout(() => {
        el.style.transition = `
          transform ${duration}s ${ease},
          opacity ${duration}s ${ease}
        `;

        el.style.opacity = to.opacity;
        el.style.transform = `translateY(${to.y}px)`;

        if (index === targets.length - 1) {
          setTimeout(() => {
            onLetterAnimationComplete?.();
          }, duration * 1000);
        }
      }, index * delay);
    });

    return () => {
      split.revert();
    };
  }, [
    text,
    delay,
    duration,
    ease,
    splitType,
    from,
    to,
    onLetterAnimationComplete,
  ]);

  const Tag = tag;

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        textAlign,
        overflow: "hidden",
        display: "inline-block",
      }}
    >
      {text}
    </Tag>
  );
}