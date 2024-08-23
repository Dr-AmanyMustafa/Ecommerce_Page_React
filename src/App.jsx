import "./App.css";
import Details from "./components/Details/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Collections from "./components/Collections/Collections"
import Men from "./components/Men/Men"
import Women from "./components/Women/Women"
import About from "./components/About/About"
import Contact from "./components/Contact/Contact"
import Cart from "./components/Cart/Cart"
import Account from "./components/Account/Account"
import Layout from "./pages/layout"
     

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Details  />} />
          <Route path="/page1" element={<Collections />} />
          <Route path="/page2" element={<Men />} />
          <Route path="/page3" element={<Women />} />
          <Route path="/page4" element={<About />} />
          <Route path="/page5" element={<Contact />} />
          <Route path="/page6" element={<Cart />} />
          <Route path="/page7" element={<Account />} />
        </Route>
      </Routes>  
    </BrowserRouter>      
    </>
  );
}

export default App;
