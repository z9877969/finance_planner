import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useSelector } from "react-redux";

const root = document.querySelector("#root");
const loaderRoot = document.querySelector("#loader-root");

const LoaderProvider = ({ children }) => {
  const isLoading = useSelector((state) => state.isLoading);

  const [list, setList] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setList((p) => (p === null || p.length === 3 ? [""] : [...p, ""]));
    }, 650);

    return () => {
      clearInterval(id);
    };
  }, []);

  useEffect(() => {
    root.style = isLoading ? "filter: blur(6px)" : null;
  }, [isLoading]);

  return (
    <>
      {isLoading &&
        createPortal(
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#00000050",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: "1000",
            }}
          >
            <h1 style={{ width: "202px", fontSize: "48px", color: "#fff" }}>
              Loading
              {list?.map(() => ".")}
            </h1>
          </div>,
          loaderRoot
        )}
      {children}
    </>
  );
};

export default LoaderProvider;
