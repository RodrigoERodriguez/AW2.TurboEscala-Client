import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Componentes Compartidos
import NavBar from './components/shared/NavBar/NavBar';
import Footer from './components/shared/footer/footer';
import ItemDetailContainer from './components/shared/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/shared/ItemListContainer/ItemListContainer';

// Componentes de Interfaz
import Carrito from './pages/Carrito/Carrito';

// Pages
import Pedidos from './pages/Pedidos/Pedidos';
import SignInOrRegister from './pages/Form/sigin';
import EmployeeView from './pages/EmployeeView/employeeView';
import EmployeeLogin from './pages/Form/EmployeeLogin';

// Contexts
import CartProvider from './context/cartcontext';
import CheckOut from './pages/CheckOut/CheckOut';

// Estilos
import './style.css';

function App() {
  const [showNavBarAndFooter, setShowNavBarAndFooter] = useState(true);

  const handleNavigationExceptions = () => {

    setShowNavBarAndFooter(false);

  };

  return (
    <CartProvider>
      <BrowserRouter>
        {showNavBarAndFooter && <NavBar />}
        
        <Routes>
          <Route
            path="/loginclientes"
            element={<SignInOrRegister setShowNavBarAndFooter={setShowNavBarAndFooter} />}
            onEnter={() => handleNavigationExceptions()}
          />
          <Route
            path="/employeeView"
            element={<EmployeeView setShowNavBarAndFooter={setShowNavBarAndFooter} />}
            onEnter={() => handleNavigationExceptions()}
          />
          <Route
            path="/loginempleados"
            element={<EmployeeLogin setShowNavBarAndFooter={setShowNavBarAndFooter} />}
            onEnter={() => handleNavigationExceptions()}
          />
          
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/productos" element={<ItemListContainer />} />
          <Route path="/productos/:categoria" element={<ItemListContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/mispedidos" element={<Pedidos />} />
        </Routes>

        {showNavBarAndFooter && <Footer />}
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
