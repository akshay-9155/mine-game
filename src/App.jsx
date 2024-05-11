import React, { useRef, useState } from "react";
import { IoDiamondSharp } from "react-icons/io5";
import gsap from "gsap";
import { GiBoltBomb } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
const App = () => {
  const [bombSqare, setBombSquare] = useState(10);
  const [hasLost, setHasLost] = useState(true);
  const curtainRef = useRef();
  const [clickedBlock, setClickedBlock] = useState([]);
  const viewBlock = (event) => {
    const boxNo = event.target.id;
    setClickedBlock((prevClickedBlock) => {
      const updatedClickedBlock = [...prevClickedBlock, boxNo];
      return updatedClickedBlock;
    });
    if (boxNo == bombSqare) {
      console.log("Game ended");
      setHasLost(true);
      alert("You lost");
    }
  };

  const { contextSafe } = useGSAP();

  const startGame = contextSafe(() => {
    setClickedBlock([]);
    setBombSquare(Math.floor(Math.random() * 24));
    setHasLost(false);
    gsap.to(curtainRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.3,
      borderRadius: "50%",
      ease: "expoScale(0.5,7,power1.in)",
    });
  });
  const arr = [
    { id: "1", display: "hidden" },
    { id: "2", display: "hidden" },
    { id: "3", display: "hidden" },
    { id: "4", display: "hidden" },
    { id: "5", display: "hidden" },
    { id: "6", display: "hidden" },
    { id: "7", display: "hidden" },
    { id: "8", display: "hidden" },
    { id: "9", display: "hidden" },
    { id: "10", display: "hidden" },
    { id: "11", display: "hidden" },
    { id: "12", display: "hidden" },
    { id: "13", display: "hidden" },
    { id: "14", display: "hidden" },
    { id: "15", display: "hidden" },
    { id: "16", display: "hidden" },
    { id: "17", display: "hidden" },
    { id: "18", display: "hidden" },
    { id: "19", display: "hidden" },
    { id: "20", display: "hidden" },
    { id: "21", display: "hidden" },
    { id: "22", display: "hidden" },
    { id: "23", display: "hidden" },
    { id: "24", display: "hidden" },
    { id: "25", display: "hidden" },
  ];

  return (
    <div
      id="box"
      className=" relative h-screen w-screen flex flex-col items-center justify-center bg-zinc-950 gap-10"
    >
      {hasLost && (
        <div
          ref={curtainRef}
          className=" h-[500px] w-[500px] rounded-xl absolute flex items-center bg-zinc-800 z-20 -translate-y-20"
        >
          <h1 className="uppercase text-8xl text-center text-gray-300">
            Click on start
          </h1>
        </div>
      )}
      <div className=" h-[400px] w-[400px] rounded-xl flex flex-wrap overflow-hidden">
        {arr.map((item, index) => {
          return (
            <div
              onClick={viewBlock}
              key={index}
              id={item.id}
              className={`relative bg-red-100 w-[80px] flex items-center justify-center border-2 border-zinc-900 rounded-2xl`}
            >
              <div
                id={item.id}
                className="overlay z-50  h-full w-full absolute"
              ></div>
              {index == bombSqare - 1 ? (
                <GiBoltBomb
                  className={`z-10 ${
                    clickedBlock.includes(item.id) ? "opacity-100" : "opacity-0"
                  }`}
                />
              ) : (
                <IoDiamondSharp
                  className={`z-10 ${
                    clickedBlock.includes(item.id) ? "opacity-100" : "opacity-0"
                  }`}
                />
              )}
            </div>
          );
        })}
      </div>
      <button
        onClick={startGame}
        className="text-zinc-50 py-5 px-10 rounded-2xl bg-zinc-800 font-extrabold text-xl uppercase"
      >
        Start
      </button>
    </div>
  );
};

export default App;

// bg-[#f0a4589f]
