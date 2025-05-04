import styles from "../styles/Main.module.css";
import Detail from "./Details";
export default function Main() {
  const images = [
    {
      id: 1,
      img: `${process.env.PUBLIC_URL}/img/hotel-1.jpg`,
      class: "galleryPhoto",
    },
    {
      id: 2,
      img: `${process.env.PUBLIC_URL}/img/hotel-2.jpg`,
      class: "galleryPhoto",
    },
    {
      id: 3,
      img: `${process.env.PUBLIC_URL}/img/hotel-3.jpg`,
      class: "galleryPhoto",
    },
  ];

  const icons = [
    {
      id: 1,
      icon: `${process.env.PUBLIC_URL}/img/sprite.svg#icon-star`,
      class: "overviewIconStar",
    },
    {
      id: 2,
      icon: `${process.env.PUBLIC_URL}/img/sprite.svg#icon-star`,
      class: "overviewIconStar",
    },
    {
      id: 3,
      icon: `${process.env.PUBLIC_URL}/img/sprite.svg#icon-star`,
      class: "overviewIconStar",
    },
    {
      id: 4,
      icon: `${process.env.PUBLIC_URL}/img/sprite.svg#icon-star`,
      class: "overviewIconStar",
    },
    {
      id: 5,
      icon: `${process.env.PUBLIC_URL}/img/sprite.svg#icon-star`,
      class: "overviewIconStar",
    },
  ];
  return (
    <>
      <main className={styles.mainContent}>
        <div className={styles.hotelView}>
          <div className={styles.gallery}>
            {images.map((item) => (
              <figure key={item.id} className={styles.galleryItem}>
                <img
                  src={item.img}
                  alt="photo hotel"
                  className={styles[item.class]}
                />
              </figure>
            ))}
          </div>
          <div className={styles.overview}>
            <div className={styles.overviewItem}>
              <h1 className={styles.overviewHeading}>Hotel Las Palmas</h1>
              <div className={styles.overviewStars}>
                {icons.map((icon) => (
                  <svg key={icon.id} className={styles[icon.class]}>
                    <use href={icon.icon}></use>
                  </svg>
                ))}
              </div>
            </div>
            <div className={styles.overviewItem}>
              <div className={styles.overviewLocation}>
                <svg className={styles.overviewIconLocation}>
                  <use href="/img/sprite.svg#icon-location-pin"></use>
                </svg>
                <button className={styles.btnInline}>
                  Albufeira, Portugal
                </button>
              </div>
              <div className={styles.overviewRating}>
                <div className={styles.overviewRatingAverage}>8.6</div>
                <div className={styles.overviewRatingCount}>429 Votes</div>
              </div>
            </div>
          </div>
        </div>
        <Detail />
      </main>
    </>
  );
}
