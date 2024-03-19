import { useEffect, useState } from "react";
import App from "../App";

export default function Card({ data }) {
  const [filterData, setFilterData] = useState(data);
  const btnData = [...new Set(data?.map((value) => value.category))];

  useEffect(() => {
    setFilterData(data);
  }, [data]);

  const handleFilter = (category) => {
    const filterByCat = category
      ? data.filter((val) => val.category === category)
      : data;
    setFilterData(filterByCat);
  };
  const showAllData = () => {
    setFilterData(data);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12  d-flex justify-content-center gap-5 mb-5">
            {btnData.map((values) => (
              <button
                className="btn btn-dark"
                key={values}
                onClick={() => handleFilter(values)}
              >
                {values}
              </button>
            ))}
            <button className="btn btn-dark" onClick={showAllData}>
              All
            </button>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          {filterData &&
            filterData.map((product) => {
              return (
                <div
                  key={product.id}
                  className="col-lg-4 col-md-4 col-sm-6   all-cover "
                >
                  <div className="card border-0">
                    <div className="card-img-top text-center">
                      <img
                        src={product.image}
                        alt={"image is not "}
                        className="w-50"
                        style={{ height: "150px" }}
                      />
                    </div>
                    <div>
                      <div className="card-body">
                        <div className="card-title fw-bold fs-4">
                          {product.title}
                          {product.price}
                        </div>
                        <div className="card-text">{product.description}</div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
