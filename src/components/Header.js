import styles from "../styles/Header.module.css";
export default function Header() {
  return (
    <div className={styles.header}>
      <div>
        <img
          className={styles.logoImg}
          src={`${process.env.PUBLIC_URL}/img/favicon.png`}
          alt="logo"
        />
      </div>
      <form action="#" className={styles.search}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search hotels"
        />
        <button className={styles.searchButton}>
          <svg className={styles.searchIcon}>
            <use
              href={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-magnifying-glass`}
            ></use>
          </svg>
        </button>
      </form>
      <nav className={styles.userNav}>
        <div className={styles.userNavIconBox}>
          <svg className={styles.userNavIcon}>
            <use
              href={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-bookmark`}
            ></use>
          </svg>
          <span className={styles.userNavNotification}>7</span>
        </div>
        <div className={styles.userNavIconBox}>
          <svg className={styles.userNavIcon}>
            <use
              href={`${process.env.PUBLIC_URL}/img/sprite.svg#icon-chat`}
            ></use>
          </svg>
          <span className={styles.userNavNotification}>13</span>
        </div>
        <div className={styles.userNavIconBox}>
          <img
            className={styles.userPhoto}
            src={`${process.env.PUBLIC_URL}/img/user.jpg`}
            alt="user photo"
          />
          <span className={styles.userNavUserName}>User</span>
        </div>
      </nav>
    </div>
  );
}
