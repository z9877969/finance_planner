import { createContext } from "react";
import { useSelector } from "react-redux";

const LoaderContext = createContext();

const LoaderProvider = ({ children }) => {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#00000050",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: "1000",
          }}
        >
          <h1 style={{ fontSize: "48px", color: "#fff" }}>Loading...</h1>
        </div>
      )}
      {children}
    </>
  );
};

export default LoaderProvider;
