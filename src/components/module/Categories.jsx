import Link from "next/link";
import styles from "../../styles/categories.module.css";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";

function Categories() {
  return (
    <>
      <Link className={styles.category_link} href={`/category/sedan`}>
        <div className={styles.category_container}>
          <span>سدان</span>
          <span>
            <Sedan />
          </span>
        </div>
      </Link>

      <Link className={styles.category_link} href={`/category/suv`}>
        <div className={styles.category_container}>
          <span>اس یو وی</span>
          <span>
            <Suv />
          </span>
        </div>
      </Link>

      <Link className={styles.category_link} href={`/category/hatchback`}>
        <div className={styles.category_container}>
          <span>هاچ بک</span>
          <span>
            <Hatchback />
          </span>
        </div>
      </Link>

      <Link className={styles.category_link} href={`/category/sport`}>
        <div className={styles.category_container}>
          <span>اسپورت</span>
          <span>
            <Sport />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Categories;
