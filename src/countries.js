import { Link } from "react-router-dom";

const Countries = (props) => {
  if (props.data.length) {
    return (
      <div>
        <h1>Countries</h1>
        <ul className="list-group">
          {props.data.map((country, index) => (
            <li className="list-group-item" key={index}>
              <span>{country.flag}</span>

              <Link
                to={`\$(country.name.common)`}
                className="country-name"
                onClick={() => props.clickHandler(country)}
              >
                {country.name.common}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Countries;
