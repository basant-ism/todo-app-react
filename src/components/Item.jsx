import styles from "../styles/Item.module.css";

const Item = (props) => {
  return (
    <>
      <div className={`container text-center ${styles.itemClass}`}>
        <div className="row">
          <div className="col-6">
            <span className={styles.spanClass}>{props.todo.name}</span>
          </div>
          <div className="col-4">
            <span className={styles.spanClass}>{props.todo.date}</span>
          </div>
          <div className="col-2">
            <button
              type="button"
              className={`btn btn-danger`}
              onClick={() => {
                props.handleDeleteClick(props.todo.key);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Item;
