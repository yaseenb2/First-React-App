import React, { useContext } from "react";
import { ThemeContext } from "./App";
import Post from "./PostListing";
import Posts from "./Comments";

const ContextComponent = () => {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyles}>
      <Post />
      <Posts postId="1" />
      <Posts postId="2" />
    </div>
  );
};

export default ContextComponent;
