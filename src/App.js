import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("App");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => {
    setText(e.target.value);
  };
  const onClickOpen = () => {
    setOpen(!open);
  };

  // useCallback: 第2引数[]の中身が変わった時だけアロー関数を再生成する
  const onClickClose = useCallback(() => {
    setOpen(false);
  }, []);

  // useMemo: 変数に対してmemo機能を付与する
  const temp = useMemo(() => 1 + 3, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}
