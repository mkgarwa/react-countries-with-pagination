import "./styles.css";
import { useEffect, useState } from "react";
import Pagination from "./pagination";
import axios from "axios";
import Countries from "./countries";
import Country from "./country";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const [currentCountry, setCurrentCountry] = useState([]);

  const fetchData = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        setCountries(response.data);
      })
      .catch((err) => {
        console.log("no country found" + err);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const redirectToCountry = (country) => {
    setCurrentCountry(country);
  };

  const currentRecords = countries.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(countries.length / recordsPerPage);

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Countries
                  data={currentRecords}
                  clickHandler={redirectToCountry}
                />
                <Pagination
                  nPages={nPages}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              </>
            }
          />
        </Routes>
        <Routes>
          <Route
            path="/:country"
            element={<Country country={currentCountry} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
