import { useEffect } from "react";
import Marquee from "react-fast-marquee";
const MarqueeText = ({
  text,
  bold,
  italic,
  speed,
  textSize,
  coursive,
  delay,
}: any) => {
  console.log(textSize);
  useEffect(() => {
    console.log("changes");
  }, [text, bold, italic, speed, textSize, coursive, delay]);
  return (
    <footer>
      <Marquee speed={speed} delay={delay}>
        <p
          style={{
            fontWeight: bold ? "bold" : "",
            fontStyle: italic ? "italic" : "",
            fontSize: textSize,
            fontFamily: coursive ? "cursive" : "",
          }}
        >
          {text}
        </p>
      </Marquee>
    </footer>
  );
};

export default MarqueeText;
