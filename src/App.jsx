import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PoliticalLeaningForm from "./pages/PoliticalLeaningForm.jsx"; // Import the new form component

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
      <Route path="/political-leaning" element={<PoliticalLeaningForm />} /> {/* Add the new route */}
      </Routes>
    </Router>
  );
}

export default App;
