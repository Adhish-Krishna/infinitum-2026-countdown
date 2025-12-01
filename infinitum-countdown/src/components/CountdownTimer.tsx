import { useEffect, useState, memo } from "react";

// Simple, memoized child to avoid unnecessary re-renders per tick
type TimeUnitProps = {
  value: string;
  unit: string; // single character (D/H/M/S)
  srLabel?: string; // screen-reader only full label
};

const TimeUnit = memo(({ value, unit, srLabel }: TimeUnitProps) => {
  return (
    <div className="flex flex-col gap-2 relative bg-transparent items-center justify-center py-2 px-4 sm:px-6 touch-manipulation min-w-[120px] sm:min-w-[150px] md:min-w-[220px]">
      <div className="flex items-end gap-3">
        <span
          className="text-[72px] sm:text-[86px] md:text-[112px] lg:text-[140px] font-extrabold text-white text-center leading-none tracking-tight drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
          style={{ fontFamily: 'Alexandria, sans-serif', marginTop: '2px' }}
        >
          {value}
        </span>
        <span
          aria-hidden="true"
          className="text-[32px] sm:text-[36px] md:text-[46px] lg:text-[56px] font-extrabold text-[#FF1170] leading-none"
          style={{ fontFamily: 'Albert Sans, sans-serif', marginBottom: '6px' }}
        >
          {unit}
        </span>
      </div>
      {srLabel ? (
        <span className="sr-only" style={{ fontFamily: 'Albert Sans, sans-serif' }}>{srLabel}</span>
      ) : null}
    </div>
  );
});

const CountdownTimer = () => {
  const [countDownTime, setCountDownTIme] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });
  // remove mountedRef and rely on clearing interval on unmount

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

      // log the values to ensure updateCountDown is running (remove dev log if needed)
      if (process.env.NODE_ENV === "development") {
        // eslint-disable-next-line no-console
        console.debug("Countdown update:", { days, hours, minutes, seconds });
      }

      setCountDownTIme({
        days: days >= 10 ? `${days}` : `0${days}`,
        hours: hours >= 10 ? `${hours}` : `0${hours}`,
        minutes: minutes >= 10 ? `${minutes}` : `0${minutes}`,
        seconds: seconds >= 10 ? `${seconds}` : `0${seconds}`,
      });
    };

    // Initial update and start interval
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-full gap-6" role="group" aria-label="Countdown timer">
      <div aria-live="polite" role="timer" className="w-full">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-16 items-end justify-center max-w-6xl mx-auto px-6">
          <TimeUnit value={countDownTime.days} unit="D" srLabel={countDownTime?.days == "01" ? "Day" : "Days"} />
          <TimeUnit value={countDownTime.hours} unit="H" srLabel={countDownTime?.hours == "01" ? "Hour" : "Hours"} />
          <TimeUnit value={countDownTime.minutes} unit="M" srLabel={countDownTime?.minutes == "01" ? "Minute" : "Minutes"} />
          <TimeUnit value={countDownTime.seconds} unit="S" srLabel={countDownTime?.seconds == "01" ? "Second" : "Seconds"} />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
