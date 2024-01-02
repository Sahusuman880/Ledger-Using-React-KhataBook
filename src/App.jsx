import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import AddItem from "./Components/AddItem";
import ShowItems from "./Components/ShowItems";
import EmptyMessage from "./Components/EmptyMessage";
import BalanceSheet from "./Components/BalanceSheet";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
function App() {
  const [items, setItem] = useState([
    {
      customer: "Suman Sahu",
      money: "Debit",
      amount: 10000,
    },
  ]);
  function addButtonClicked(Names, moneys, amounts) {
    const newItem = [
      ...items,
      { customer: Names, money: moneys, amount: amounts },
    ];
    setItem(newItem);
  }
  function removeButtonClicked(index) {
    let newItem = [...items];
    newItem.splice(index, 1);
    setItem(newItem);
  }
  return (
    <>
      <Heading></Heading>
      <AddItem onAddKey={addButtonClicked}></AddItem>
      <EmptyMessage message={items} />
      <ShowItems Items={items} onDeleteKey={removeButtonClicked}></ShowItems>
      <BalanceSheet Items={items} />
    </>
  );
}
export default App;
