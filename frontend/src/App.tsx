import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './layouts/Layout';
import  ItemDetailsPage from './pages/ItemDetailsPage';
import { CartPage } from './pages/CartPage';
import HomePage from './pages/HomePage';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}> 
          <Route index element={<HomePage />} />
          <Route path="/itemdetails/:id" element={<ItemDetailsPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </Router>
  )
}
 
export default App;
