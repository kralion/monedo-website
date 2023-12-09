import blackAsset from "@/assets/black.svg";
export default function Hero() {
  return (
    <div
      data-aos="fade-right"
      data-aos-delay="100"
      data-aos-duration="2000"
      className="flex justify-center  "
    >
      <img className="drop-shadow-md" src={blackAsset} alt="phone" />
    </div>
  );
}
