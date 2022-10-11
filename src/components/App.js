import React from "react";
import TopMenu from "./TopMenu"
import MenuLinks from "./MenuLinks";
import MainContent from "./MainContent";

function App() {
  return <div className="app-container">{/* What components go here? */}
    <TopMenu />
    <MenuLinks />
    <MainContent />
  </div>;
}

export default App;
