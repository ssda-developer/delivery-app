import { Routes, Route } from 'react-router-dom';
import ShopsPage from './pages/ShopsPage';
import ShoppingListPage from './pages/ShoppingListPage';
import Header from './components/Header';
import { Container } from 'react-bootstrap';

function App() {
    return (
        <div className="app">
            <Header/>
            <Container className="py-4">
                <Routes>
                    <Route exact path="/" element={<ShopsPage/>}/>
                    <Route path="/shopping-list-page" element={<ShoppingListPage/>}/>
                </Routes>
            </Container>
        </div>
    );
}

export default App;
