const App = () => {
  const onClickButton = () => alert();
  const contentStyle = {
    color: "blue",
    fontSize: "18px", //通常のCSSならfont-sizeだがReact用はキャメルケースで命名しなおされている
  };
  return (
    <>
      <h1 style={{ color: "red" }}>Hello world</h1>
      {/*JSを示す{}の中にオブジェクトを示す{}がある*/}
      <p style={contentStyle}>お元気ですか</p>
      {/*JSを示す{}があり、その中でオブジェクトを指定*/}
      <button onClick={onClickButton}>ボタン</button>
      {/*onclickイベントもキャメルケースで命名されている*/}
    </>
  );
};

export default App;
