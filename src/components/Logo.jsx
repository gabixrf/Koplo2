import AnimatedText from "./AnimatedText";

export default function Logo({ onComplete }) {
  return (
    <AnimatedText
      text="Koplo"
      className="logo"
      delay={210}
      duration={1.5}
      ease="ease-out"
      splitType="chars"
      from={{ opacity: 0, y: 100 }}
      to={{ opacity: 1, y: 0 }}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={onComplete}
    />
  );
}
