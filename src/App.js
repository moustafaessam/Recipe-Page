import Content from "./Content";
import "./styles.css";
import Image from "./Image";
import Introduction from "./Introduction";
import Ingredients from "./Ingredients";
import Instruction from "./Instruction";
import Nutrition from "./Nutrition";

function App() {
  return (
    <Content>
      <Image />
      <Introduction />
      <Ingredients />
      <Instruction />
      <Nutrition />
    </Content>
  );
}

export default App;
