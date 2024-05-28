//USER CARDS
import Image from "next/image";

//I used css modules here, this allows us to define styles that only affect any file this css is imported into, without editing any other files
import styles from "./usercard.module.scss";

type UserCardProps = {
  pfp: string;
  name: string;
  recipes: number;
  showcase: Array<string>;
};

const UserCard = ({ pfp, name, recipes, showcase }: UserCardProps) => {
  const isArray = Array.isArray(showcase);
  const main = isArray ? showcase[0] : null;
  const other = isArray ? showcase[1] : null;
  const all = isArray ? showcase[2] : null;

  return (
    <div className={styles.user}>
      <div className={styles.info}>
        <div className={styles["user-img"]}>
          {
            pfp ?
            <Image src={pfp} alt="user" fill sizes="50px" />
            :
            <div className="empty"></div>
          }
        </div>
        <div className={styles["user-text"]}>
          <p>{name || "no name"}</p>
          <span>{recipes || "0"} recipes</span>
        </div>
      </div>
      <div className={styles["user-showcase"]}>
        <div className={styles.main}>
          {main ? (
            <Image src={main} alt="showcase" fill sizes="150px" />
          ) : (
            <div className="empty">No recipes</div>
          )}
        </div>
        <div className={styles.more}>
          <div className={styles.other}>
            {other ? (
              <Image src={other} alt="showcase" fill sizes="150px" />
            ) : (
              <div className="empty"></div>
            )}
          </div>
          <div className={styles.other}>
            <div className={styles.all}>
              <p>+{recipes ? recipes - 2 : "+0"}</p>
            </div>
            {all ? <Image src={all} alt="showcase" fill sizes="150px" /> : ""}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
