import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import PersonPage from "./pages/PersonPage";
import ContactForm from "./pages/ContactForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/contact"/>}/>
        <Route path="/contact" element={<PersonPage/>}/>
        <Route path="/contact_create" element={<ContactForm/>}/>
        <Route path="/contact_create/:id" element={<ContactForm/>}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
