import axios from "axios";
import { uiActions } from "../reducers/uiReducer";

export const sendCartData = (cart) => {
  return (dispatch) => {
    const storeCart = async () => {
      dispatch(
        uiActions.showNotification({
          status: "pending",
          title: "Sending...",
          message: "Sending cart data!.",
        })
      );
      const res = await axios({
        method: "PUT",
        url: "https://react-redux-980cf-default-rtdb.firebaseio.com/cart.json",
        data: cart,
      });

      if (res.status === 200) {
        dispatch(
          uiActions.showNotification({
            status: "success",
            title: "Success!...",
            message: "Cart sent successfully!.",
          })
        );
      }
    };
    try {
      storeCart();
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: "error",
          title: "Error!...",
          message: "Cart not sent successfully!.",
        })
      );
    }

    setTimeout(() => {
      dispatch(uiActions.showNotification({}));
    }, 5000);
  };
};
