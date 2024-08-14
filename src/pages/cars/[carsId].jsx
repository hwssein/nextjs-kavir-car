import { useRouter } from "next/router";

import CarDetails from "@/components/template/CarDetails";

import carsData from "@/constant/carsData";
import Loader from "@/components/module/Loader";
import { useEffect, useState } from "react";

function CarsId() {
  const router = useRouter();
  const carsId = +router.query.carsId;
  const [carDetails, setCarDetails] = useState([]);

  useEffect(() => {
    const filter = carsData.find((item) => item.id === carsId);
    setCarDetails(filter);
  }, [carsId]);

  if (carDetails?.length === 0) return <Loader />;

  return (
    <>
      <CarDetails data={carDetails} />
    </>
  );
}

export default CarsId;
