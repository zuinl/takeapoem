import { useState } from "react";

import ThemeContext from "./contexts/ThemeContext";

import Header from "./components/Header";
import MoodsBox from "./components/MoodsBox";
import Title from "./components/Title";
import ThemeButton from "./components/ThemeButton";
import GlobalStyle from "./GlobalStyle";
import LoadingMessage from "./components/LoadingMessage";
import { MoodContextProvider } from "./contexts/MoodContext";
import Poem from "./components/Poem";

function App() {
  const [theme, setTheme] = useState("dark")

  return (
    <ThemeContext.Provider value={theme}>
      <GlobalStyle theme={theme} />

      <div className="App">
        <ThemeButton theme={theme}
          toggleTheme={_ => setTheme(theme === "dark" ? "light" : "dark")} />

        <Header />

        <Title title="How are you feeling today?" />
        <MoodContextProvider>
          <MoodsBox />

          <LoadingMessage
            message="I'm looking for the perfect poem for you" />
        
          <Title title="Alright, so take this poem" />
          <Poem title="Oi" poem="Olá" />
        </MoodContextProvider>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
