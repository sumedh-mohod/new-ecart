export const addItem = (product) => {
  return {
    type: "ADDITEM",
    payload: product,
  };
};

export const delItem = (product) => {
  return {
    type: "DELITEM",
    payload: product,
  };
};

export const addCartQuantity = (product) => {
  return {
    type: "ADD_QUNTITY",
    payload: product,
  };
};

export const removeCartQuantity = (product) => {
  return {
    type: "REMOVE_QUANTITY",
    payload: product,
  };
};

