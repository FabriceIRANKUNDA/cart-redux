import { useDispatch } from "react-redux";
import { uiActions } from "../../store/reducers/uiReducer";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
  const dispatch = useDispatch();

  const toogleCartHandler = () => {
    dispatch(uiActions.toogle());
  };

  return (
    <button onClick={toogleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
