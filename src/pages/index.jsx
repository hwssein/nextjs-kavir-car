import { useState } from "react";

import CarsCard from "@/components/module/CarsCard";

import carsData from "@/constant/carsData";

import styles from "../styles/index.module.css";
import Categories from "@/components/module/Categories";
import Search from "@/components/module/Search";

function Index() {
  const [cars, setCars] = useState(carsData);

  return (
    <>
      <div className={styles.search_container}>
        <Search />
      </div>

      <div className={styles.categories_container}>
        <Categories />
      </div>

      <div className={styles.car_card_container}>
        {cars.map((item) => (
          <CarsCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default Index;
