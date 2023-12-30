import React from "react";

const authHeader = () => {
  const user = localStorage.getItem("userToken");
  if (user) {
    return { Authorization: "Bearer" + user };
  } else {
    return null;
  }
};

export default authHeader;
export const authToken = localStorage.getItem("userToken");
