import React from "react";
import style from "@/app/recipes.module.css";
const loading = () => {
  return (
    <section className={style.loader_section}>
      <span className={style.loader}></span>
    </section>
  );
};

export default loading;
