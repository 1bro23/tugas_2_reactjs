import React from "react";
import MenuMakanan from "./Page/MenuMakanan";
import Header from "./Page/Header";
import MenuTentangKami from "./Page/MenuTentangKami";
import MenuKontak from "./Page/MenuKontak";
import Footer from "./Page/Footer";
import MenuUtama from "./Page/MenuUtama";

function App() {
  return(
    <div>
      <Header/>
      <MenuUtama/>
      <MenuMakanan/>

      <MenuTentangKami/>
      <MenuKontak/>
      <Footer/>
    </div>
  )
}

export default App;
