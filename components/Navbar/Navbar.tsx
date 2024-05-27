//Navbar
import Image from "next/image";

//I used css modules here, this allows us to define styles that only affect any file this css is imported into, without editing any other files
import styles from "./navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div className={styles['search-box']}>
            <div className={styles.search}>
                <div>
                    <Image 
                        src="/icons/search.png"
                        alt="search"
                        fill
                        sizes="20px"
                    />
                </div>
                <p>Search by name</p>
            </div>
            <div className={styles.command}>
                <p>Ctrl K</p>
            </div>
        </div>
        <div className={styles.action}>
            <button>
                <div>
                    <Image
                        src="/icons/plus.png"
                        alt="plus"
                        fill
                        sizes="20px"
                    />
                </div>
                <p>Add a new recipe</p>
            </button>
            <div className={styles.pfp}>
                <Image
                    src="/users/pfp.jpg"
                    alt="pfp"
                    fill
                    sizes="50px"
                />
            </div>
        </div>
    </nav>
  )
}

export default Navbar
