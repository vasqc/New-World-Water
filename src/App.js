import React, { useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Page from "./components/Page";
import Footer from "./components/Footer";

function App() {
  const [pages] = useState([
    {
      name: "about me"
    },
    { name: "portfolio" },
    { name: "contact" },
    {
      name: ""
    }
  ]);

  const [currentPage, setCurrentPage] = useState(pages[0]);

  return (
    <div>
      <Nav
          pages={pages}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        ></Nav>
      <Header>
        
      </Header>
      <main>
        <Page currentPage={currentPage}></Page>
      </main>
      <Footer />
    </div>
  );
}

export default App;