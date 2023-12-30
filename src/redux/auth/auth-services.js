export const logout = () => {
  localStorage.removeItem("userToken");
  localStorage.clear();
};
