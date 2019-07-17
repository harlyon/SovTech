import gql from 'graphql-tag';
import React from 'react';
import { useQuery } from 'react-apollo-hooks';
import { Link } from "react-router-dom";
import spinner from '.././image/spinner.gif'

const img = "https://assets.chucknorris.host/img/avatar/chuck-norris.png";

const GET_CATEGORIES = gql`
  {
    categories
  }
`;

const Categories = () => {
    const { data, error, loading } = useQuery(GET_CATEGORIES);
    if (loading) {
      return <img
          src={spinner}
          alt="Fetching Data ............."
          style={{ width: "300px", margin: "50px auto", display: "block" }}
        />;
    };
    if (error) {
      return `Error! ${error.message}`;
    };
  return (
    <div>
    <div className="row">
      <div className="col-lg-12 brand">
        <h3 className="text-center">All Categories</h3>
      </div>
        {data.categories.map((item, id) => (
        <div key={id} className="col-lg-4">
          <div className="box">
            <div>
              <img src={img} alt="chuck" />
            </div>
            <h4>
              <Link to={`/${item}`}>
                <h3>{item}<span role="img">⭐️</span></h3>
              </Link>
              <hr />
            </h4>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default Categories;