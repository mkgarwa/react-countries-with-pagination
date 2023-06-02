import { useNavigate } from "react-router-dom";

const Country = (props) => {
  const data = props.country;
  let navigate = useNavigate();

  if (data.name.common) {
    return (
      <div className="card">
        <button
          type="button"
          className="btn btn-success"
          onClick={() => navigate("/")}
        >
          Back to List{" "}
        </button>
        <ul className="list-group">
          <li className="list-group-item">
            <strong>Name:</strong> {data.name.common}
          </li>
          <li className="list-group-item">
            <strong>Official:</strong>
            {data.name.official}
          </li>
          <li className="list-group-item">
            <strong>CCA2:</strong>
            {data.cca2}
          </li>
          <li className="list-group-item">
            <strong>Status:</strong>
            {data.status}
          </li>
          <li className="list-group-item">
            <strong>is UN Member:</strong>
            {data.unMember.toString()}
          </li>
          <li className="list-group-item">
            <strong>Region:</strong>
            {data.region}
          </li>
        </ul>
      </div>
    );
  } else {
    navigate("/");
  }
};

export default Country;
