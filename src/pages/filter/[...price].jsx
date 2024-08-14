import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import carsData from "@/constant/carsData";

import styles from "../../styles/filterPrice.module.css";
import Loader from "@/components/module/Loader";
import CarsCard from "@/components/module/CarsCard";

function FilterPrice() {
  const router = useRouter();
  const [filterData, setFilterData] = useState([]);
  const [min, max] = router.query.price || [];

  useEffect(() => {
    const filter = carsData.filter(
      (item) => item.price >= +min && item.price <= +max
    );
    setFilterData(filter);
  }, [min, max]);

  if (!min && !max) return <Loader />;

  return (
    <>
      {filterData.length === 0 ? (
        <div className={styles.not_found_cars}>
          <p>خودرو ای در این بازه قیمتی وجود ندارد</p>
        </div>
      ) : (
        <div className={styles.filter_price_container}>
          {filterData.map((item) => (
            <CarsCard key={item.id} data={item} />
          ))}
        </div>
      )}
    </>
  );
}

export default FilterPrice;
