import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData } from "./store/actions/cartActions";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";

let init = true;
function App() {
  const toogleCart = useSelector((state) => state.ui.cartIsVisible);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const fetchCart = async () => {
  //     const data = await axios({
  //       method: "GET",
  //       url: "https://react-redux-980cf-default-rtdb.firebaseio.com/cart.json",
  //     });
  //     if (data) dispatch(cartActions.replaceCart(data.data));
  //   };
  //   fetchCart();
  // }, [dispatch]);

  useEffect(() => {
    if (init) {
      init = false;
      return;
    }
    sendCartData(cart);
    // const storeCart = async () => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "pending",
    //       title: "Sending...",
    //       message: "Sending cart data!.",
    //     })
    //   );
    //   const res = await axios({
    //     method: "PUT",
    //     url: "https://react-redux-980cf-default-rtdb.firebaseio.com/cart.json",
    //     data: cart,
    //   });

    //   if (res.status === 200) {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "success",
    //         title: "Success!...",
    //         message: "Cart sent successfully!.",
    //       })
    //     );
    //   } else {
    //     dispatch(
    //       uiActions.showNotification({
    //         status: "error",
    //         title: "Error!...",
    //         message: "Cart not sent successfully!.",
    //       })
    //     );
    //   }
    // };

    // storeCart().catch((error) => {
    //   dispatch(
    //     uiActions.showNotification({
    //       status: "error",
    //       title: "Error!...",
    //       message: "Cart not sent successfully!.",
    //     })
    //   );
    // });
  }, [cart, dispatch]);

  return (
    <React.Fragment>
      {notification.message && <Notification {...notification} />}
      <Layout>
        {toogleCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  );
}

export default App;
