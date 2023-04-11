import { useEffect, useState } from "react";

export default function MyToDo() {
  const [count, setCount] = useState(0);
  const [date, seDate] = useState(new Date());

  const addTitle = () => {
    setCount((preValue) => preValue + 1);
  };
  const tick = () => {
    console.log('Ticking.......')
    seDate(new Date());
  };


  useEffect(() => {
    document.title = `Click ${count}`;
  }, [count]);

  useEffect(() => {
    console.log("Starting");
    const interval =setInterval(tick, 1000);

    return() =>{
        console.log('component unmount');
        clearInterval(interval)
    }
  }, []);

  return (
    <div>
      <p>DateiS: {date.toLocaleTimeString()} </p>
      <button onClick={addTitle}>Click</button>
    </div>
  );
}
