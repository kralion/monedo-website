import blackAsset from "@/assets/black.svg";
import { animated, useSpring } from "@react-spring/web";
export default function Hero() {
  const props = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0)" },
    delay: 500,
  });
  return (
    <div className="flex  justify-center ">
      <animated.div
        style={{
          ...props,
        }}
      >
        <img src={blackAsset} alt="phone" />
      </animated.div>
    </div>
  );
}
