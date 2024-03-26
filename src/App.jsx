import "./App.css";
import { CustomButton } from "./components/CustomButton";

function App() {
  const btns = [
    {
      cls: "display arbutus-regular",
      label: "0.0",
    },
    {
      cls: "btn btn-ac",
      label: "AC",
    },
    {
      cls: "btn btn-c",
      label: "C",
    },
    {
      cls: "btn btn-per",
      label: "%",
    },
    {
      cls: "btn btn-divide",
      label: "/",
    },
    {
      cls: "btn btn-7",
      label: "7",
    },
    {
      cls: "btn btn-8",
      label: "8",
    },
    {
      cls: "btn btn-9",
      label: "9",
    },
    {
      cls: "btn btn-x",
      label: "*",
    },
    {
      cls: "btn btn-4",
      label: "4",
    },
    {
      cls: "btn btn-5",
      label: "5",
    },
    {
      cls: "btn btn-6",
      label: "6",
    },
    {
      cls: "btn btn-minus",
      label: "-",
    },
    {
      cls: "btn btn-1",
      label: "1",
    },
    {
      cls: "btn btn-2",
      label: "2",
    },
    {
      cls: "btn btn-3",
      label: "3",
    },
    {
      cls: "btn btn-plus",
      label: "+",
    },
    {
      cls: "btn btn-0",
      label: "0",
    },
    {
      cls: "btn btn-dot",
      label: ".",
    },
    {
      cls: "btn btn-equal",
      label: "=",
    },
  ];
  return (
    <div className="wrapper flex-center">
      <div className="calculator">
        {btns.map((btn, i) => {
          return <CustomButton cls={btn.cls} label={btn.label} key={i} />;
        })}
      </div>
    </div>
  );
}

export default App;
