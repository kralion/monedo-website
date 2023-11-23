import AppLayout from "@/components/applayout";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <AppLayout>
      <div className="flex justify-center p-7 ">
        <div className="space-y-5 flex flex-col justify-center items-center">
          <h1 className="font-montserrat px-64 pt-16  text-center font-black text-6xl tracking-tight">
            Controla tus gastos super fácil y rápida
          </h1>

          <p className="text-lg px-20 text-center">
            La mejor app para controlar tus gastos.
          </p>
          <div className="flex gap-3 pt-7">
            <Button className="rounded-full flex items-center gap-3 p-6 px-10">
              <img
                src="/src/assets/app-store.svg"
                alt="app-store"
                className="w-5"
              />
              App Store
            </Button>
            <Button className="rounded-full flex items-center gap-3 p-6 px-10">
              <img
                src="/src/assets/google-play.svg"
                alt="app-store"
                className="w-5"
              />
              Google Play
            </Button>
          </div>
        </div>
      </div>
      <div className="flex justify-center relative">
        <div>
          <img
            className="absolute left-10 top-24"
            src="/src/assets/success-notification.svg"
            alt="notification"
          />
          <img src="/src/assets/updated-registered.svg" alt="notification" />
          <img
            className="absolute top-80  "
            src="/src/assets/graph.svg"
            alt="notification"
          />
        </div>
        <img src="/src/assets/black.svg" alt="phone" />
        <div className="space-y-20">
          <img
            className="absolute -top-10 -right-12"
            src="/src/assets/limit-reached.svg"
            alt="notification"
          />
          <img
            className="absolute top-36 "
            src="/src/assets/export-data.svg"
            alt="notification"
          />
          <img src="/src/assets/expense-registered.svg" alt="notification" />
        </div>
      </div>
    </AppLayout>
  );
}

export default App;
