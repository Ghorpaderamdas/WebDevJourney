import "./App.css";
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);

  function resetCount(){
    setCount(0);
  }

  return (
    <>
      <div className="h-[100vh] w-[100vw] bg-[#344151] flex gap-20 flex-col justify-center items-center">
        <div className="flex flex-col">
          <p className="text-[#0398d4] font-medium text-[25px]">
            Increment And Decrement
          </p>
          <div className="flex text-[#344151] rounded-sm p-3 px-5 gap-12 text-[25px] bg-white justify-evenly mt-12">
            <button
              onClick={()=>setCount(count-1)}
              className=" border-r-2 text-center w-20 border-[#bfbfbf] text-5xl"
            > -
              <i className="fa fa-minus"></i>
            </button>
            <div className="font-bold gap-12 text-5xl" id="value">
              {count}
            </div>
            <button
              onClick={()=>setCount(count+1)}
              className=" border-l-2 text-center w-20 border-[#bfbfbf] text-5xl"
            > +
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <button
          onClick={()=>resetCount(count-0)}
          className="bg-[#0398d4] text-white px-5 py-2 rounded-sm text-lg mt-[30px] box-border w-32  "
          >
            Reset
          </button>
        </div>
      </div>
    </>
    // <main className="flex justify-center gap-4 flex-col min-h-screen">
    //   <h1 className="text-3xl text-center font-bold underline">React & Tailwind CSS Starter Pack</h1>
    //   <p className="text-center text-xl">This is a starter pack for React & Tailwind CSS projects.</p>
    //   <img src="https://bit.ly/3wsmzTy" alt="meme" className="mx-auto" />
    // </main>
  );
}

export default App;
