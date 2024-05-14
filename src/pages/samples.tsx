"react";
import backgroundImage from "../assets/background-samples.svg";

export default function Samples() {
  return (
    <div
      className="w-screen lg:h-screen pt-64 lg:top-20  relative lg:block lg:mt-64  flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="lg:font-bold lg:-mt-24 absolute top-20 lg:top-64 lg:left-96 lg:right-96 lg:text-2xl lg:px-0 px-24 text-xs font-montserrat  text-center lg:w-[450px]">
        Al trackear tus gastos e ingresos, podrás tener un mejor control de tu
        dinero. Y al crear presupuestos, podrás planificar tus gastos y ahorrar
        para tus metas.
      </p>
    </div>
  );
}
