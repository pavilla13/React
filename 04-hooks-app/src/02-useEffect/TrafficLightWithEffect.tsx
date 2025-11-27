import { useEffect, useState } from "react";

// En tailwind no construir variables que estén basadas en otras variables
const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  const time = 4;
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState(time);

  useEffect(() => {
    if (countdown === 0) return;
    const intervalId = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [countdown]);

  useEffect(() => {
    if (countdown > 0) return;
    setCountdown(time);
    if (light === "red") {
      setLight("green");
      return;
    }
    if (light === "yellow") {
      setLight("red");
      return;
    }
    if (light === "green") {
      setCountdown(time / 2);
      setLight("yellow");
      return;
    }
    return;
  }, [countdown, light]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">
          Semáforo con useEffect
        </h1>
        <h2 className="text-white text-xl">{countdown}</h2>
        <div className="w-64 bg-gray-700 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear"
            style={{ width: `${(countdown / 5) * 100}%` }}
          ></div>
        </div>
        <div
          className={`w-32 h-32 ${
            light === "red" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>

        <div
          className={`w-32 h-32 ${
            light === "yellow" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${
            light === "green" ? colors[light] : "bg-gray-500"
          } rounded-full`}
        ></div>
      </div>
    </div>
  );
};
