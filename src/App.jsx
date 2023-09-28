import React, { useState, useEffect } from "react";
import ColorfulMessage from "./components/colorfulMessage";

const App = () => {
  const onClickCountUp = () => setNum(num + 1);
  //状態を示す数値numと状態を更新するための関数setNumをuseStateから分割代入
  //useState(0)の0はnumの初期値指定
  const [num, setNum] = useState(0);
  //数値型である必要性はなし
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  const onClickSwitchShowFlag = () => setFaceShowFlag(!faceShowFlag);

  //useEffect：関心の分離　画面ロード時と第二引数の配列に設定した値が変化したときのみ実行されるように設定できる
  useEffect(() => console.log("useEffect-Load!"), []);
  useEffect(() => {
    console.log("useeffect-2");
    //faceShowFlag気にせずsetしていいように思えるが、そうすると変更がなくても再描画が走ってしまうらしく、ちゃんと防止する必要があるとのこと。
    if (num % 3 === 0) faceShowFlag || setFaceShowFlag(true);
    else faceShowFlag && setFaceShowFlag(false);
  }, [num]);

  const contentStyle = {
    color: "blue",
    fontSize: "18px", //通常のCSSならfont-sizeだがReact用はキャメルケースで命名しなおされている
  };
  return (
    <>
      {/*JSを示す{}の中にオブジェクトを示す{}がある*/}
      <h1 style={{ color: "red" }}>Hello world</h1>
      {/*JSを示す{}があり、その中でオブジェクトを指定*/}
      <p style={contentStyle}>お元気ですか</p>
      {/*onclickイベントもキャメルケースで命名されている*/}
      <button onClick={onClickCountUp}>カウントアップ</button>

      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <ColorfulMessage color="pink" message="私は">
        元気です
      </ColorfulMessage>
      <p>{num}</p>
      {faceShowFlag && <p>(^^)</p>}
    </>
  );
};

export default App;
