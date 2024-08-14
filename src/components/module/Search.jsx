import { useState } from "react";

import styles from "../../styles/search.module.css";
import { useRouter } from "next/router";

function Search() {
  const router = useRouter();
  const [minValue, setMinValue] = useState("");
  const [maxValue, setMaxValue] = useState("");

  const searchHandler = () => {
    if (minValue && maxValue && maxValue > minValue && minValue >= 10000) {
      router.push(`/filter/${minValue}/${maxValue}`);

      setMinValue("");
      setMaxValue("");
    } else {
      alert(
        " لطفا محدوده قیمت را درست وارد کنید , شروع قیمت از 10000 دلار است"
      );
    }
  };

  return (
    <>
      <div className={styles.inputs_container}>
        <div className={styles.input_container}>
          <span>محدوده قیمت از</span>
          <input
            id="min-value"
            type="number"
            value={minValue}
            onChange={(e) => setMinValue(e.target.value)}
          />
        </div>

        <div className={styles.input_container}>
          <span>تا </span>
          <input
            id="max-value"
            type="number"
            value={maxValue}
            onChange={(e) => setMaxValue(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.search_btn}>
        <button onClick={searchHandler}>اعمال قیمت</button>
      </div>
    </>
  );
}

export default Search;
