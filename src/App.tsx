
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import ProductList from './components/ProductList.tsx';
import ProductDetail from "./components/ProductDetail.tsx";
import ProductForm from "./components/ProductForm.tsx";
import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";

function App() {
    return (
        <div className="min-h-screen bg-white text-black font-sans">
            <BrowserRouter>
                <Navbar />
                <main className="max-w-3xl mx-auto px-6 py-14 space-y-14">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductList />} />
                        <Route path="/products/:id" element={<ProductDetail />} />
                        <Route path="/products/new" element={<ProductForm />} />
                        <Route path="/products/edit/:id" element={<ProductForm />} />
                    </Routes>
                </main>
            </BrowserRouter>
        </div>
    );
}

export default App;
