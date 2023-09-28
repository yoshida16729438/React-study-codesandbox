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

/*
【export defaultとexport const～について】
export defaultとした場合：import側ではimport [任意の名称] from [インポート元ファイル]と記載する。
このとき、任意の名称を付けられる代わりにdefault exportできるのは1ファイルに1つだけとなる。（たぶんdefault設定されているやつがそれにあたると認識される）

export const App=()=>とした場合：import側ではimport {App} from [インポート元ファイル]と記載する。（分割代入）
こちらではexportで指定した名称と同じ名称を書かなければならない代わりに、複数をexportすることができる。
*/
