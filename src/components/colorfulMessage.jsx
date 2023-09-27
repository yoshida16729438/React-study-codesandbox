import React from "react";

const ColorfulMessage = (props) => {
  //htmlタグの属性として与えたものは属性名、タグの中身として与えたものはchildrenとして取得できる
  const { color, message, children } = props;
  const contentStyle = {
    color, //プロパティ名と設定する変数名が同じ場合は名称省略可
    fontSize: "18px",
  };

  return <p style={contentStyle}>{message + children}</p>;
};

export default ColorfulMessage;
