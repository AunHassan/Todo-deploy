"use client";
import { time, timeStamp } from "console";
import { Input } from "postcss";
import React, { useState } from "react";
type item = { tittle: string; desc: string };

const Todo = () => {
  const [item, setitem] = useState<item[]>([]);
  const [tittle, settittle] = useState("");
  const [desc, setdesc] = useState("");

  const submitHandler = (e: any) => {
    e.preventDefault();
    if (!(tittle && desc)) return alert("Please fill out all fields!");
    setitem([...item, { tittle, desc }]);
    settittle("");
    setdesc("");
  };
  const d = new Date();
  const hour = d.getHours();
  const min = d.getMinutes();
  const handledelete = (i: number) => {
    let copyItems = [...item];
    copyItems.splice(i, 1);
    setitem(copyItems);
  };
  //   const handeCompleted = (i: number) => {};
  let RenderList = item.map((x: any, i: number) => {
    return (
      <>
        <div
          key={i}
          className=" flex justify-between border-2 border-gray-200  w-10/12 mx-auto text-xl my-2 p-3"
        >
          <h3 className="mt-2 ml-5 flex">{x.tittle}</h3>
          <h3 className="mt-2">{x.desc}</h3>
          <div className="flex justify-between">
            <p className="mt-4 text-sm text-gray-400 font-bold">
              {hour + ":" + min}
            </p>
            <button
              className="m-2 px-2 border-1 bg-red-600 border-2 rounded-lg"
              onClick={() => {
                handledelete(i);
              }}
            >
              delete
            </button>
            <button
              className="m-2 px-2 mr-5 border-1 bg-green-600 border-2 rounded-lg"
              onClick={(i) => {}}
            >
              completed
            </button>
          </div>
        </div>
      </>
    );
  });

  return (
    <>
      <h1 className="bg-black text-yellow-100 p-2 font-extrabold text-6xl flex justify-center align-middle">
        Todo App
      </h1>
      <form className="mt-5 flex-auto">
        <input
          className="px-2 ml-2 mr-4 border-zinc-900 border-2 rounded-md py-3 pr-40 font-bold text-xl"
          type="text"
          placeholder="Enter tittle here"
          value={tittle}
          onChange={(e) => {
            settittle(e.target.value);
          }}
        />
        <input
          className="px-2 pr-40 py-3 ml-4 border-zinc-900 border-2 rounded-md font-bold text-xl"
          type="text"
          placeholder="Enter description here"
          value={desc}
          onChange={(e) => {
            setdesc(e.target.value);
          }}
        />
        <button
          className="rounded m-3 ml-8 bg-blue-700 text-cyan-50 py-2 px-3 text-xl font-bold"
          onClick={submitHandler}
        >
          Submit
        </button>
        <hr className="mt-10" />
        <h1 className="text-4xl text-center font-bold">Your Todo</h1>
        <hr className="mb-5" />
      </form>
      <ul>
        <li typeof="dot">{RenderList}</li>
      </ul>
    </>
  );
};

export default Todo;
