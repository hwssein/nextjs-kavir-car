function Loader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexFlow: "row nowrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span
          style={{
            margin: "20% auto",
            fontSize: "2rem",
            borderBottom: "2px solid var(--highlight)",
            padding: "4px 8px",
          }}
        >
          ... Loading
        </span>
      </div>
    </>
  );
}

export default Loader;
