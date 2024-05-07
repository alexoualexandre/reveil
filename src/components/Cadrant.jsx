import { useEffect } from "react";
import { MyContext } from "./Context";

export function Cadrant() {
  const { second, setSecond, minute, setMinute, heure, setHeure } = MyContext();

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSecond((prevCount) => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  if (second > 59) {
    setSecond(0);
    setMinute(minute + 1);
  }
  if (minute > 59) {
    setHeure(heure + 1);
    setMinute(0);
  }
  if (heure > 23) {
    setHeure(0);
    setMinute(0);
    setSecond(0);
  }

  return (
    <>
      <div className="cadrant">
        <span className="number">{heure < 10 ? `0${heure}` : heure}</span>
        <span className="number">:</span>
        <span className="number">{minute < 10 ? `0${minute}` : minute}</span>
        <span className="number">:</span>
        <span className="number">{second < 10 ? `0${second}` : second}</span>
      </div>
    </>
  );
}
