export const fetchAll = (data) => {
  return {
    type: "FETCH",
    data,
  };
};

export const incrementAction = (data) => {
  return {
    type: "ADD",
    data,
  };
};

export const decrementAction = (data) => {
  return {
    type: "SUB",
    data,
  };
};
