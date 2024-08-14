import styles from "../../styles/carDetails.module.css";
import Image from "next/image";

function carDetails({ data }) {
  const {
    category,
    description,
    distance,
    image,
    location,
    model,
    name,
    price,
    year,
  } = { ...data };

  return (
    <>
      <div className={styles.details_container}>
        <div className={styles.image_container}>
          <Image
            className={styles.details_image}
            src={image}
            width={600}
            height={450}
            alt={name}
            layout="responsive"
            priority
          />
        </div>

        <div className={styles.details_content}>
          <div className={styles.details_name}>
            <span>نام خودرو:</span>
            <strong>
              {name} {model}
            </strong>
          </div>

          <div className={styles.details_year}>
            <div>
              <span>سال تولید: </span>
              <strong>{year}</strong>
            </div>

            <div>
              <span>گروه: </span>
              <strong>{category}</strong>
            </div>
          </div>

          <div className={styles.details_distance}>
            <div>
              <span>مسافت طی شده: </span>
              <strong>{distance}</strong>
            </div>
            <div>
              <span>مکان: </span>
              <strong>{location}</strong>
            </div>
          </div>

          <div className={styles.description_title}>توضیحات: </div>
          <p className={styles.description_content}>{description}</p>

          <div className={styles.details_price}>
            <span>قیمت: </span>
            <strong>{price} دلار آمریکا</strong>
          </div>
        </div>
      </div>
    </>
  );
}

export default carDetails;
