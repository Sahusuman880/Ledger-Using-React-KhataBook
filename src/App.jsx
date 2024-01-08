import { useReducer, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Heading from "./Components/Heading";
import AddItem from "./Components/AddItem";
import ShowItems from "./Components/ShowItems";
import EmptyMessage from "./Components/EmptyMessage";
import BalanceSheet from "./Components/BalanceSheet";
import { ItemsContext } from "./store/items-store";

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

function itemReducer(currentItem, action) {
  let newItem = [...currentItem];
  if (action.type === "ADD_ITEM") {
    newItem.push({
      customer: action.payload.Names,
      money: action.payload.moneys,
      amount: action.payload.amounts,
    });
  }
  if (action.type === "DELETE_ITEM") {
    newItem.splice(action.payload, 1);
  }
  return newItem;
}
function App() {
  // const [items, setItem] = useState([

  //   {
  //     customer: "Suman Sahu",
  //     money: "Debit",
  //     amount: 10000,
  //   },
  // ]);
  const [items, dispatchItems] = useReducer(itemReducer, []);

  function addButtonClicked(Names, moneys, amounts) {
    if ((Names.length === 0, moneys.length == 0)) {
      alert("enter valid details");
    } else {
      const AddItem = {
        type: "ADD_ITEM",
        payload: {
          Names,
          moneys,
          amounts,
        },
      };
      dispatchItems(AddItem);
    }
  }
  function removeButtonClicked(index) {
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: index,
    };
    dispatchItems(deleteItem);
  }
  return (
    <>
      <ItemsContext.Provider
        value={{
          Items: items,
          onAddKey: addButtonClicked,
          onDeleteKey: removeButtonClicked,
        }}
      >
        <Heading></Heading>
        <AddItem></AddItem>
        <EmptyMessage message={items} />
        <ShowItems></ShowItems>
        <BalanceSheet Items={items} />
      </ItemsContext.Provider>
    </>
  );
}
export default App;
