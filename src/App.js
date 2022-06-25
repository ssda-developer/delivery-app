import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ShopsPage from './pages/shops-page';
import ShoppingCartPage from './pages/shopping-cart-page';
import { CartsProvider } from './context/CartsContext';

function App() {
    return (
        <div className="App">
            <CartsProvider>
                <Header/>
                <Routes>
                    <Route exact path="/" element={<ShopsPage/>}/>
                    <Route path="/shopping-cart-page" element={<ShoppingCartPage/>}/>
                </Routes>
            </CartsProvider>
        </div>
    );
}

export default App;
