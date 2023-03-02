import { useEffect, useState } from "react";
import s from "./Section.module.scss";

const Section = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    const pageHeight = window.innerHeight - header.clientHeight - 1;
    setPageHeight(pageHeight);
  }, []);

  return (
    <section className={s.container} style={{ height: `${pageHeight}px` }}>
      {children}
    </section>
  );
};

export default Section;
