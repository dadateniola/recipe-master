//Sidebar
import Image from "next/image";
import Link from "next/link";

import Logo from "../Logo";

//I used css modules here, this allows us to define styles that only affect any file this css is imported into, without editing any other files
import styles from "./sidebar.module.scss";

export default function Sidebar() {
  const menuIcons = ["home", "recipes", "messages"];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
        <div className={styles.menu}>
          {menuIcons.map((icon, index) => (
            <div className={styles.item} key={index}>
              <div className={styles["item-icon"]}>
                <Image
                  src={`/icons/${icon}.png`}
                  alt="icon"
                  fill
                  sizes="25px"
                />
              </div>
              <p>{icon}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.item}>
          <div className={styles["item-icon"]}>
            <Image src="/icons/team.png" alt="icon" fill sizes="25px" />
          </div>
          <p className={styles["no-cap"]}>Meet the team</p>
        </div>
        <div className={styles.item}>
          <div className={styles["item-icon"]}>
            <Image src="/icons/help.png" alt="icon" fill sizes="25px" />
          </div>
          <p className={styles["no-cap"]}>Help and support</p>
        </div>
      </div>
    </aside>
  );
}
