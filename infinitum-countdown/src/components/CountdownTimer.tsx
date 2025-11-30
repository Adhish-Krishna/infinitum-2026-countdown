import { useEffect, useState } from "react";

const CountdownTimer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    // Set target date to February 13, 2026 at 00:00
    const countDownDate = new Date(2026, 1, 13, 0, 0, 0).getTime();

    const updateCountdown = () => {
      const currentTime = new Date().getTime();
      const timeDiffrence = countDownDate - currentTime;

      if (timeDiffrence < 0) {
        setCountDownTIme({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
        });
        return;
      }

      const days = Math.floor(timeDiffrence / (24 * 60 * 60 * 1000));
      const hours = Math.floor((timeDiffrence % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiffrence % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((timeDiffrence % (60 * 1000)) / 1000);

      setCountDownTIme({
        days: days >= 10 ? `${days}` : `0${days}`,
        hours: hours >= 10 ? `${hours}` : `0${hours}`,
        minutes: minutes >= 10 ? `${minutes}` : `0${minutes}`,
        seconds: seconds >= 10 ? `${seconds}` : `0${seconds}`,
      });
    };

    // Initial update
    updateCountdown();

    // Set interval
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-8">
      <div className="flex justify-center gap-12 sm:gap-16">
        <div className="flex flex-col gap-3 relative">
          <span 
            className="text-6xl sm:text-7xl font-semibold text-white text-center"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {countDownTime?.days}
          </span>
          <span className="text-white text-sm sm:text-lg text-center" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            {countDownTime?.days == "01" ? "Day" : "Days"}
          </span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <span 
            className="text-6xl sm:text-7xl font-semibold text-white text-center"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {countDownTime?.hours}
          </span>
          <span className="text-white text-sm sm:text-lg text-center" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            {countDownTime?.hours == "01" ? "Hour" : "Hours"}
          </span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <span 
            className="text-6xl sm:text-7xl font-semibold text-white text-center"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {countDownTime?.minutes}
          </span>
          <span className="text-white text-sm sm:text-lg text-center" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            {countDownTime?.minutes == "01" ? "Minute" : "Minutes"}
          </span>
        </div>
        <div className="flex flex-col gap-3 relative">
          <span 
            className="text-6xl sm:text-7xl font-semibold text-white text-center"
            style={{ fontFamily: 'Alexandria, sans-serif' }}
          >
            {countDownTime?.seconds}
          </span>
          <span className="text-white text-sm sm:text-lg text-center" style={{ fontFamily: 'Albert Sans, sans-serif' }}>
            {countDownTime?.seconds == "01" ? "Second" : "Seconds"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
