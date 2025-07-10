import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        );
        const json = await res.json();

        // The response will be like { "usd": { "inr": 83.1, "eur": 0.91, ... } }
        setData(json[currency]);

        // Optional: log the result
        console.log("Fetched rates:", json[currency]);
      } catch (error) {
        console.error("Error fetching currency info:", error);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
