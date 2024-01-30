//* CSS Modules 적용하기 👉 https://github.com/css-modules/css-modules
import React from "react";
import styles from "./Post.module.scss";

function Post() {
  return (
    <article className={styles.post}>
      <header className={styles.header}>
        <h2>Post Title</h2>
      </header>

      <section>
        <p>Post 1</p>
        <p>Post 1</p>
        <p>Post 1</p>
      </section>

      <footer>Coment</footer>
    </article>
  );
}

export default Post;
