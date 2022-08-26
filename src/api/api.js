const mockData = {
  count: 15,
};
export const fetchCounter = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mockData);
    }, 3000);
  });
};
