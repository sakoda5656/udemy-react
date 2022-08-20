import { memo } from "react";

const style = {
  width: "100%",
  height: "200px",
  backgroundColor: "khaki"
};

// memo: 親要素の再レンダリング時にレンダリングされないようになる
export const ChildArea = memo((props) => {
  const { open, onClickClose } = props;
  console.log("ChildArea was rendered!!");

  const data = [...Array(2000).keys()];
  data.forEach(() => {
    console.log("...");
  });
  return (
    <>
      {open ? (
        <div style={style}>
          <p>子コンポーネント</p>
          <button onClick={onClickClose}>閉じる</button>
        </div>
      ) : null}
    </>
  );
});
