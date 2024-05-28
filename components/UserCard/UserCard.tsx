//USER CARDS
import Image from "next/image";

//I used css modules here, this allows us to define styles that only affect any file this css is imported into, without editing any other files
import styles from "./usercard.module.scss";

const UserCard = () => {
  return (
    <div className={styles.user}>
      <div className={styles.info}>
        <div className={styles["user-img"]}>
          <Image src="/users/purple.jpg" alt="user" fill sizes="50px" />
        </div>
        <div className={styles["user-text"]}>
          <p>alison sari</p>
          <span>120 recipes</span>
        </div>
      </div>
      <div className={styles["user-showcase"]}>
        <div className={styles.main}>
          <Image src="/showcase/burger.jpg" alt="showcase" fill sizes="150px" />
        </div>
        <div className={styles.more}>
          <div className={styles.other}>
            <Image
              src="/showcase/sharwarma.jpg"
              alt="showcase"
              fill
              sizes="100px"
            />
          </div>
          <div className={styles.other}>
            <Image
              src="/showcase/popsticle.jpg"
              alt="showcase"
              fill
              sizes="100px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
