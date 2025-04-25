import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const Timer = () => {
  const { t } = useTranslation(); // Initialize translation function
  const targetDate = new Date("2025-07-23T08:00:00+03:00"); // 8 AM 23rd July, Russian Time (MSK)
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  // Function to calculate the time left
  function calculateTimeLeft(targetDate) {
    const now = new Date();
    const difference = targetDate - now;

    if (difference <= 0) {
      return null; // Time's up
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24)); // Calculate total days
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    ); // Get remaining hours
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)); // Get remaining minutes
    const seconds = Math.floor((difference % (1000 * 60)) / 1000); // Get remaining seconds

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      if (updatedTimeLeft === null) {
        clearInterval(timer); // Clear the timer when the target date is reached
      } else {
        setTimeLeft(updatedTimeLeft);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="flex flex-col justify-center max-w-xl mx-auto items-center     mt-10">
      <p className="text-lg md:text-2xl font-semibold mb-5">
        {t("timer.title")}
      </p>
      {timeLeft && (
        <div className="w-full flex justify-center">
          <p className="text-2xl flex items-center text-white md:text-5xl leading-10 font-bold mx-auto">
            <div className="flex flex-col  items-center">
              <span className="bg-[#1e3a8a] px-3 py-3 md:py-6  rounded-lg shadow-lg">
                {timeLeft.days}
              </span>
              <span className="text-[#1e3a8a] text-sm">{t("timer.days")}</span>
            </div>

            <span className="text-[#1e3a8a] h-full    md:pb-6 text-5xl md:text-7xl mx-2">
              :
            </span>

            <div className="flex flex-col items-center">
              <span className="bg-[#1e3a8a] px-3 py-3 md:py-6 rounded-lg shadow-lg">
                {timeLeft.hours}
              </span>
              <span className="text-[#1e3a8a] text-sm">{t("timer.hours")}</span>
            </div>

            <span className="text-[#1e3a8a] h-full    md:pb-6 text-5xl md:text-7xl mx-2">
              :
            </span>
            <div className="flex flex-col items-center">
              <span className="bg-[#1e3a8a] px-3 py-3 md:py-6  rounded-lg shadow-lg">
                {timeLeft.minutes}
              </span>
              <span className="text-[#1e3a8a] text-sm">
                {t("timer.minutes")}
              </span>
            </div>

            <span className="text-[#1e3a8a] h-full    md:pb-6 text-5xl md:text-7xl mx-2">
              :
            </span>
            <div className="flex flex-col items-center">
              <span className="bg-[#1e3a8a] px-3 py-3 md:py-6 rounded-lg shadow-lg">
                {timeLeft.seconds}
              </span>
              <span className="text-[#1e3a8a] text-sm">
                {t("timer.seconds")}
              </span>
            </div>
          </p>
        </div>
      )}
    </div>
  );
};

export default Timer;
