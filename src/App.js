import { useState } from "react";
import Particles from "react-particles";
import { loadFireworksPreset } from "tsparticles-preset-fireworks";
import { Typewriter } from "react-simple-typewriter";
import Countdown from "react-countdown";

const App = () => {
  const [newYearMessage, setNewYearMessage] = useState(["Masih 2023"]);


  const particlesInitialization = async (engine) => {
    await loadFireworksPreset(engine);
  };

  const timeLeft = () => {
    const newYearDate = new Date("January 1, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const difference = newYearDate - now;
    return difference;
  };

  return (
    <>
      <Particles
        init={particlesInitialization}
        options={{preset: "fireworks"}}
      />
      <div className="flex justify-center items-center min-h-screen flex-col gap-4">
        <span className="text-white font-bold text-4xl text-center px-4 z-50"> 
          <Typewriter
             words={newYearMessage} 
             loop={false}
             cursor
             cursorStyle={"_"}
            />
        </span>
        <div className="text-white font-bold text-2xl z-50 ">
          <Countdown 
            date={Date.now() + timeLeft()}
            onComplete={() =>
            setNewYearMessage([
              "Selamat",
              "Tahun",
              "Baru",
              "✨HNY 2024✨",
            ])
            }
          />
        </div>
      </div>
      
    </>
  )
}

export default App