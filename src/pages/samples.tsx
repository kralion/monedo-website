"react";
import backgroundImage from "../assets/background-samples.svg";

export default function Samples() {
  return (
    <div
      className="w-screen h-screen pt-36  flex flex-col justify-center items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <p className="font-bold -mt-24 text-2xl font-montserrat  text-center w-[450px]">
        Al trackear tus gastos e ingresos, podrás tener un mejor control de tu
        dinero. Y al crear presupuestos, podrás planificar tus gastos y ahorrar
        para tus metas.
      </p>
    </div>
  );
}
