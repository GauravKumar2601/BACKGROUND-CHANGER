import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  const [headingColor, setHeadingColor] = useState("black");
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }} //no curly braces for color as already a curly brace in style att
    >
      <div className="heading">
        <h1 className={`text-${headingColor}`}>Background Changer</h1>
      </div>

      <div
        className="fixed flex flex-wrap 
      justify-center bottom-12 inset-x-0 px-2"
      >
        <div
          className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-xl"
        >
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
            onClick={() => {
              setHeadingColor("white");
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
            onClick={() => {
              setHeadingColor("white");
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
            onClick={() => {
              setHeadingColor("white");
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
            onClick={() => {
              setHeadingColor("black");
              setColor("yellow");
            }}
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "orange" }}
            onClick={() => {
              setHeadingColor("black");
              setColor("orange");
            }}
          >
            Orange
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "cyan" }}
            onClick={() => {
              setHeadingColor("black");
              setColor("cyan");
            }}
          >
            Cyan
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "lavender" }}
            onClick={() => {
              setHeadingColor("black");
              setColor("lavender");
            }}
          >
            Lavender
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "brown" }}
            onClick={() => {
              setHeadingColor("white");
              setColor("brown");
            }}
          >
            Brown
          </button>
          <button
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
            onClick={() => {
              setHeadingColor("white");
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
