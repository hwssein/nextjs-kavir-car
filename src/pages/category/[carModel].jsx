import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import carsData from "@/constant/carsData";

import Loader from "@/components/module/Loader";
import CarsCard from "@/components/module/CarsCard";

function CarModel() {
  const router = useRouter();
  const category = router.query.carModel;
  const [filterCar, setFilterCar] = useState([]);

  useEffect(() => {
    const filter = carsData.filter((item) => item.category === category);
    setFilterCar(filter);
  }, [category]);

  if (filterCar.length === 0) return <Loader />;

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "center",
          justifyContent: "space-evenly",
        }}
      >
        {filterCar.map((item) => (
          <CarsCard key={item.id} data={item} />
        ))}
      </div>
    </>
  );
}

export default CarModel;
