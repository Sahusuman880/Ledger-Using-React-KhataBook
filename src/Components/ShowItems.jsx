import { useContext } from "react";
import styles from "./ShowItems.module.css";
import { ItemsContext } from "../store/items-store";
import { AiFillDelete } from "react-icons/ai";

function ShowItems() {
  const contextObj = useContext(ItemsContext);
  const PaymentItems = contextObj.Items;
  const deleteItems = contextObj.onDeleteKey;
  return (
    <>
      {PaymentItems.map((element, index) => {
        return (
          <div className={`${styles.items} container text-center `} key={index}>
            <div className="row row-cols-4">
              <div className="col">{element.customer}</div>
              <div
                className={
                  element.money === "Debit"
                    ? `${styles.debit} col`
                    : `${styles.credit} col`
                }
              >
                {element.money}
              </div>
              <div className="col">{element.amount}</div>
              <div className="col">
                <button
                  className={`${styles.btn}  btn btn-danger`}
                  onClick={() => deleteItems(index)}
                >
                  <AiFillDelete />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default ShowItems;
