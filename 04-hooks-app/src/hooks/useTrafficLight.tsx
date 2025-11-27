import { useEffect, useState } from "react";

// En tailwind no construir variables que estén basadas en otras variables
const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

export type TrafficLightColor = keyof typeof colors;

const useTrafficLight = () => {
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

  return {
    countdown,
    light,
    colors,
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
  };
};

export default useTrafficLight;
