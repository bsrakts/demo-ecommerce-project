import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <Header />
        <main className="main">
          <Routes>
            <Route exact path="/" element={<ProductListing />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route>404 Not Found!</Route>
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
