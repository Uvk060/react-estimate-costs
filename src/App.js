import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const App = () => {
  const costs = [
    {
      id: "c1",
      date: new Date(2022, 2, 8),
      description: "iphone",
      amount: 998.99,
    },
    {
      id: "c2",
      date: new Date(2022, 2, 28),
      description: "ipod generation 4",
      amount: 111.11,
    },
    {
      id: "c3",
      date: new Date(2022, 5, 21),
      description: "iMac Display",
      amount: 1799.99,
    },
  ];
  const addCostHandler = (cost) => {
    console.log(cost);
    console.log("app components");
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
