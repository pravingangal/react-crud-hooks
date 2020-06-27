import { useEffect, useState } from "react";

const DataPool = (url) => {
  const [data, setData] = useState([]);
  const [empDetRow, setEmpDetRow] = useState({});

  useEffect(() => {
    async function fetchData(url) {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setEmpDetRow(data.empData[0]);
    }

    fetchData(url);
  }, [url]);

  return { ...data, empDetRow: empDetRow };
};
export default DataPool;
