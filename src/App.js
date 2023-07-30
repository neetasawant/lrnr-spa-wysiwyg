import React from "react";
import "./App.css";
import { EditorContext } from "./context/editor-context";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Dashboard from "./components/Layout/Dashboard/Dashboard";
import Register from "./Register";
import Login from "./Login";
import GlobalStyles from "./GlobalStyle";
import { ThemeContextProvider } from "./context/theme-context";
const App = () => {
  const [showEditor, setShowEditor] = React.useState(false);
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <EditorContext.Provider value={{ showEditor, setShowEditor }}>
        <Router>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/Dashboard" component={Dashboard} />
        </Router>
      </EditorContext.Provider>
    </ThemeContextProvider>
  );
};

export default App;
