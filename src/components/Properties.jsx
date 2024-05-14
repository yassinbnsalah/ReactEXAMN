import React, { useEffect, useState } from "react";
import Property from "./Property";
import { getAlldata } from "../service/crud";
import axios from "axios";
import { useSelector } from "react-redux";
import { selectedData } from "../redux/dataSlice";

function Properties() {
  const [Data] = useSelector(selectedData);
  const [proprietes, setProprietes] = useState();
  const [filterdData, setFilteredData] = useState();
  const [maxWage, setMax] = useState(0);
  const [minWage, setMin] = useState(0);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3001/data");
      console.log(response.data);
      setProprietes(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    console.log(parseInt(maxWage), parseInt(minWage));
    setFilteredData(
      proprietes?.filter((prop) => prop.price > minWage && prop.price < maxWage)
    );
  }, [maxWage, minWage]);
  return (
    <center>
      <h1> Liste des propriétes </h1>
      <input
        type="number"
        value={minWage}
        onChange={(e) => setMin(e.target.value)}
      />
      <input
        type="number"
        value={maxWage}
        onChange={(e) => setMax(e.target.value)}
      />
      {filterdData ? (
        <>
          {" "}
          {filterdData?.map((item, index) => (
            <Property data={item} key={index}></Property>
          ))}
        </>
      ) : (
        <>
          {" "}
          {Data?.map((item, index) => (
            <Property data={item} key={index}></Property>
          ))}
        </>
      )}
    </center>
  );
}

export default Properties;
