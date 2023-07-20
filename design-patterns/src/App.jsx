import "./App.css";
import { ButtonWithColor } from "./components/Button";
import Input from "./components/Input";
import ProductList from "./components/ProductList";
import SliderContainer from "./components/SliderContainer";
import Slider from "./components/Slider";

function App() {
  return (
    <div>
      <ButtonWithColor />
      <ProductList></ProductList>
      <Input label="Product Name" name="productName" theme="" />
      <SliderContainer>
        {(isActive) => {
          return <Slider isActive={isActive} />;
        }}
        {/* <Slider />
        <Slider />
        <Slider />
        <Slider /> */}
      </SliderContainer>
    </div>
  );
}

export default App;
