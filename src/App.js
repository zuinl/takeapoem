import Header from "./components/Header";
import MoodsBox from "./components/MoodsBox";
import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Header />

      <Title title="How are you feeling today?" />
      <MoodsBox />
    </div>
  );
}

export default App;
