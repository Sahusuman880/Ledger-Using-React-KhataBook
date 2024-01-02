import styles from "./ShowItems.module.css";
function ShowItems(props) {
  return (
    <>
      {props.Items.map((element, index) => {
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
                  onClick={() => props.onDeleteKey(index)}
                >
                  Delete
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
