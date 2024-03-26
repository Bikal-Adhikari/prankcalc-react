import { useState } from "react";
import "./App.css";
import { CustomButton } from "./components/CustomButton";
import aa from "./assets/audio.mp3";

const operators = ["%", "/", "*", "-", "+"];
function App() {
  const [strToDisplay, setStringToDisplay] = useState("");
  const [isPrank, setIsPrank] = useState(false);
  const [lastOperator, setLastOperator] = useState("");

  const btnClicked = (value) => {
    setIsPrank(false);
    //when Ac is clicked
    if (value === "AC") {
      setStringToDisplay("");
      return;
    }

    //when C is clicked
    if (value === "C") {
      setStringToDisplay(strToDisplay.slice(0, -1));
      return;
    }

    // when = is clicked

    if (value === "=") {
      // get the last character

      const lc = strToDisplay[strToDisplay.length - 1];

      // check if it is the operator
      if (operators.includes(lc)) {
        ///// if yes, then remove it and update the display
        setStringToDisplay(strToDisplay.slice(0, -1));
      }

      return total();
    }

    //operator is clicked
    if (operators.includes(value)) {
      setLastOperator(value);

      const lc = strToDisplay[strToDisplay.length - 1];
      if (operators.includes(lc)) {
        return setStringToDisplay(strToDisplay.slice(0, -1) + value);
      }
    }

    // handle the . issues
    if (value === ".") {
      const lastOperatorIndex = strToDisplay.lastIndexOf(lastOperator);

      const lastNumberSet = strToDisplay.slice(lastOperatorIndex);

      if (lastNumberSet.includes(".")) {
        return;
      }

      if (!lastOperator && strToDisplay.includes(".")) {
        return;
      }
    }

    setStringToDisplay(strToDisplay + value);
  };

  const total = () => {
    const extraVal = randomValue();
    if (extraVal) {
      const audio = new Audio(aa);
      audio.play();
      setIsPrank(true);
      // displayElm.classList.add("prank");
      // audio.play();
    }
    const ttl = eval(strToDisplay) + extraVal;
    setStringToDisplay(ttl.toString());
  };

  const randomValue = () => {
    const num = Math.round(Math.random() * 10);
    return num <= 3 ? num : 0;
  };

  const btns = [
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
        <CustomButton
          cls={
            isPrank
              ? "display arbutus-regular prank"
              : "display arbutus-regular "
          }
          label={strToDisplay || "0.0"}
        />
        {btns.map((btn, i) => {
          return (
            <CustomButton
              btnClicked={btnClicked}
              cls={btn.cls}
              label={btn.label}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
