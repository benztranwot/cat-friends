interface ScrollProp {
  children: JSX.Element;
}

const Scroll = ({ children }: ScrollProp): JSX.Element => {
  return <div style={{ overflowY: "scroll", border: "1px solid black", height: "500px" }}>{children}</div>;
};

export default Scroll;
