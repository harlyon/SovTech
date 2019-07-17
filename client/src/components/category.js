import React from 'react';
import gql from 'graphql-tag';
import { useQuery } from 'react-apollo-hooks';
import spinner from '.././image/spinner.gif'

const CATEGORY = gql`
{
  category(name: "dev") {
    icon_url
    value
  }
}
`;

const Category = ({
  match: {
    params: { item }
  }
}) => {
  const { data, error, loading } = useQuery(CATEGORY);
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
    <>
        <div className="featured">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <h3>Category Detail</h3>
              </div>
              <div className="col-lg-8">
                <div className="box grid">
                  <h3 className="by">{data.category.categories}</h3>
                  <div>
                    <img src={data.category.icon_url} alt="ava" />
                  </div>
                  <h2>
                    <p>{data.category.value}</p>
                  </h2>
                  <div className="tag">
                    <a href="/">Go Back Home</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Category;