import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { useThemeStore } from './store/useThemeStore';

function App() {
    const themeStore = useThemeStore();
    return (
        <div className='app' data-theme={themeStore.theme}>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/:id/product" element={<ProductPage />} />
            </Routes>
        </div>
    )
}

export default App
