//RECIPE CARDS
import Image from "next/image";

//I used css modules here, this allows us to define styles that only affect any file this css is imported into, without editing any other files
import styles from "./recipecard.module.scss";

type RecipeCardProps = {
  img: string;
  pfp: string;
  name: string;
  time: number;
};

const RecipeCard = ({ img, pfp, name, time }: RecipeCardProps) => {
  return (
    <div className={styles.recipe}>
      {img ? (
        <Image src={img} alt="recipe" fill sizes="20vw" />
      ) : (
        <div className="empty"></div>
      )}
      <div className={styles.info}>
        <div className={styles["pfp-box"]}>
          <div className={styles.pfp}>
            {pfp ? (
              <Image src={pfp} alt="pfp" fill sizes="50px" />
            ) : (
              <div className="empty"></div>
            )}
          </div>
        </div>
        <div className={styles.text}>
          <p>{name}</p>
          <div className={styles.time}>
            <div className={styles.icon}>
              <Image src="/icons/clock.png" alt="clock" fill sizes="15px" />
            </div>
            <span>{time || 0} mins</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
