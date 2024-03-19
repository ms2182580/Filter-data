import { useQuery } from "react-query";
import fetchData from "./Components/FetchApis";
import Card from "./Components/Card";
import Button from "./Components/Button";

export default function App() {
  const { data } = useQuery({
    queryKey: "product",
    queryFn: fetchData,
  });

  const btnData = [...new Set(data?.map((value) => value.category))];

  return (
    <div className="container-fluid">
      <div className="row">
        <h1 className="col-12 text-center fw-bold mt-3 mb-5">
          Food Filter App
        </h1>
        <Button btnData={btnData} />
        <Card data={data} />
      </div>
    </div>
  );
}
