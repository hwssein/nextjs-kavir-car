import Image from "next/image";

import styles from "../../styles/carsCard.module.css";
import Link from "next/link";

function CarsCard({ data }) {
  return (
    <>
      <div className={styles.card_container}>
        <Image
          src={data.image}
          width={250}
          height={170}
          alt={`${data.name} car`}
          priority
          className={styles.card_image}
        />

        <div className={styles.card_content}>
          <h2 className={styles.card_car_name}>
            {data.name} {data.model}
          </h2>

          <div className={styles.card_car_category}>
            <span>گروه : {data.category}</span>
            <span>سال تولید : {data.year}</span>
          </div>

          <div className={styles.card_location}>
            <span>مکان :</span>
            <span>{data.location}</span>
          </div>

          <Link href={`/cars/${data.id}`} className={styles.card_link}>
            <button className={styles.card_btn}>
              {data.price} دلار آمریکا
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CarsCard;
