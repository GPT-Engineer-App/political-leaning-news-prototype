import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PoliticalLeaningForm from "./pages/PoliticalLeaningForm.jsx"; // Import the new form component
import './App.css'; // Import CSS for styling

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">The New York Times</h1>
      </header>
      <Router>
        <main className="app-main">
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/political-leaning" element={<PoliticalLeaningForm />} /> {/* Add the new route */}
          </Routes>
        </main>
      </Router>
      <footer className="app-footer">
        <p>&copy; 2023 The New York Times Company</p>
      </footer>
    </div>
  );
}

export default App;