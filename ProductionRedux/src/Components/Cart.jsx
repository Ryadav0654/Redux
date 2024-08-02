import React from "react";
import { useSelector } from "react-redux";
import { getItemsSelector } from "../slice/cartSlice";

const Cart = () => {

  const items = useSelector(getItemsSelector);
  console.log(items);
  const total = items?.reduce((a, b) => a + b.price, 0);
  return (
    <div className="alert alert-success">
      <h3 className="text-center">
        Total Items: {items.length} (Rs. {total})/-
      </h3>
    </div>
  );
};

export default Cart;
