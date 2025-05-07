import styles from "../styles/Details.module.css";
export default function Detail() {
  const details = [
    { id: 1, item: "Close to the beach" },
    { id: 1, item: "Breakfast included" },
    { id: 1, item: "Free airport shutlle" },
    { id: 1, item: "Free wifi in all rooms" },
    { id: 1, item: "Air conditioning and healting" },
    { id: 1, item: "Pets allowed" },
    { id: 1, item: "We speak all languages" },
    { id: 1, item: "Perfect for families" },
  ];
  return (
    <>
      <div className={styles.detail}>
        <div className={styles.description}>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
            reprehenderit quisquam! Provident in, consequatur blanditiis veniam
            qui est veritatis nostrum.
          </p>
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi,
            reprehenderit quisquam!
          </p>
          <ul className={styles.list}>
            {details.map((item) => (
              <li key={item.id} className={styles.listItem}>
                <svg className={styles.detailIcon}>
                  <use href="/img/sprite.svg#icon-chevron-thin-right"></use>
                </svg>
                {item.item}
              </li>
            ))}
          </ul>
          <div className={styles.recommend}>
            <p className={styles.recommendCount}>
              Lucy and 3 other friends recommend this hotel.
            </p>
            <p className={styles.recommendFriends}>
              <img
                src={`${process.env.PUBLIC_URL}/img/user-3.jpg`}
                className={styles.recommendPhoto}
                alt="photo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/user-4.jpg`}
                className={styles.recommendPhoto}
                alt="photo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/user-5.jpg`}
                className={styles.recommendPhoto}
                alt="photo"
              />
              <img
                src={`${process.env.PUBLIC_URL}/img/user-6.jpg`}
                className={styles.recommendPhoto}
                alt="photo"
              />
            </p>
          </div>
        </div>
        <div className={styles.userReviews}>
          <figure className={styles.review}>
            <blockquote className={styles.reviewText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea at
              eos vero asperiores, nam commodi!
            </blockquote>
            <figcaption className={styles.reviewUser}>
              <img
                src={`${process.env.PUBLIC_URL}/img/user-1.jpg`}
                alt="user"
                className={styles.reviewPhoto}
              />

              <div className={styles.reviewUserBox}>
                <p className={styles.reviewUserName}>Nick Smith</p>
                <p className={styles.reviewUserDate}>Feb 23rd, 2017</p>
              </div>
              <div className={styles.reviewRating}>7.8</div>
            </figcaption>
          </figure>
          <figure className={styles.review}>
            <blockquote className={styles.reviewText}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea at
              eos vero asperiores, nam commodi!
            </blockquote>
            <figcaption className={styles.reviewUser}>
              <img
                src={`${process.env.PUBLIC_URL}/img/user-2.jpg`}
                alt="user"
                className={styles.reviewPhoto}
              />

              <div className={styles.reviewUserBox}>
                <p className={styles.reviewUserName}>Mery Thomas</p>
                <p className={styles.reviewUserDate}>Marth 23rd, 2018</p>
              </div>
              <div className={styles.reviewRating}>9.6</div>
            </figcaption>
          </figure>
          <button className={styles.btnInline}>
            Show all<span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className={styles.cta}>
        <h2 className={styles.ctaBookNow}>
          Good news! We have free rooms for you!
        </h2>
        <button className={styles.btnCta}>
          <a
            href="https://booking.dreamplacehotels.com/en/hotel/HCRISTINA?datein=02-04-2025&dateout=03-04-2025&adults=2&wh_token=380552d2-2592-47b3-96c5-ed5ccd6788e8-189666-pms&utm_source=GoogleHPA&utm_medium=PPA&utm_campaign=MetaI%2FO&utm_content=MK&utm_term=&channel=google&origin=meta&affiliate=google&gclid=Cj0KCQjwna6_BhCbARIsALId2Z09uDN3jN8wXc6OnPNCA9j6-FMSvStm8vv-gWDV282hh6JOcglzoXkaAmAbEALw_wcB&gad_source=7&roomId=" // Replace with the actual booking link
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnCtaLink}
          >
            <span className={`${styles.btnCta} ${styles.btnCtaVisible}`}>
              Book now
            </span>
            <span className={`${styles.btnCta} ${styles.btnCtaUnvisible}`}>
              Only few room left
            </span>
          </a>
        </button>
      </div>
    </>
  );
}
