import Main from "./Main";
import Navigation from "./Navigation";

import styles from "../styles/Content.module.css";
export default function Content() {
  return (
    <div className={styles.content}>
      <Navigation />
      <Main />;
    </div>
  );
}
