"use client";

// import { Option1 } from "@/components/Option1";
import { Option2 } from "@/components/Option2";
// import { useState } from "react";

export default function Home() {
  // const [option, setOption] = useState(true);

  return (
    <div className="">
      {/* {option === true ? <Option1 /> : <Option2 />}
      <button
        onClick={() => setOption(!option)}
        className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-4 rounded-full fixed top-2 right-2"
      >
        Đổi
      </button> */}
      <Option2 />
    </div>
  );
}
