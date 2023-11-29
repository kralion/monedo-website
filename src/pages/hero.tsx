import susccesNotificationAsset from "@/assets/success-notification.svg";
import updatedRegisteredAsset from "@/assets/updated-registered.svg";
import chartGraphicAsset from "@/assets/chart-graphic.svg";
import blackAsset from "@/assets/black.svg";
import limitReachedAsset from "@/assets/limit-reached.svg";
import notifiesAsset from "@/assets/notifies.svg";
import expenseRegisteredAsset from "@/assets/expense-registered.svg";
export default function Hero() {
  return (
    <div className="flex -mt-36 justify-center relative">
      <div>
        <img
          className="absolute left-10 top-24"
          src={susccesNotificationAsset}
          alt="notification"
        />
        <img src={updatedRegisteredAsset} alt="notification" />
        <img
          className="absolute top-96 left-16  "
          src={chartGraphicAsset}
          alt="notification"
        />
      </div>
      <img src={blackAsset} alt="phone" />
      <div className="space-y-20">
        <img
          className="absolute top-[450px] -right-5"
          src={limitReachedAsset}
          alt="notification"
        />
        <img
          className="absolute top-36 "
          src={notifiesAsset}
          alt="notification"
        />
        <img src={expenseRegisteredAsset} alt="notification" />
      </div>
    </div>
  );
}
