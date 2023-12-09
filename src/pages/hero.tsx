import blackAsset from "@/assets/black.svg";
export default function Hero() {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="20"
      data-aos-duration="1500"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-once="false"
      className="flex justify-center  "
    >
      <img className="drop-shadow-md" src={blackAsset} alt="phone" />
    </div>
  );
}
