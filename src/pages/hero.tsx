export default function Hero() {
  return (
    <div className="flex -mt-36 justify-center relative">
      <div>
        <img
          className="absolute left-10 top-24"
          src="/src/assets/success-notification.svg"
          alt="notification"
        />
        <img src="/src/assets/updated-registered.svg" alt="notification" />
        <img
          className="absolute top-96 left-16  "
          src="/src/assets/chart-graphic.svg"
          alt="notification"
        />
      </div>
      <img src="/src/assets/black.svg" alt="phone" />
      <div className="space-y-20">
        <img
          className="absolute top-[450px] -right-5"
          src="/src/assets/limit-reached.svg"
          alt="notification"
        />
        <img
          className="absolute top-36 "
          src="/src/assets/notifies.svg"
          alt="notification"
        />
        <img src="/src/assets/expense-registered.svg" alt="notification" />
      </div>
    </div>
  );
}
