import { useState, useEffect } from 'react';
import type {Product} from '../types/Product';
import { productService } from '../services/api';
import { Link } from 'react-router-dom';

export default function ProductList() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productService.getAll(); // ✅ 수정
                setProducts(data);
            } catch (err) {
                setError('상품 목록을 불러오지 못했습니다.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p className="text-center py-12">로딩 중...</p>;
    if (error) return <p className="text-center text-red-500 py-12">{error}</p>;

    return (
        <div className="space-y-12">
            <h2 className="text-2xl font-bold text-center text-gray-800">Products</h2>

            <div className="text-center">
                <Link to="/products/new" className="text-indigo-600 hover:underline font-medium">
                    Add New Product
                </Link>
            </div>

            <div className="space-y-8">
                {products.map((product) => (
                    <div
                        key={product.id}
                        className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
                    >
                        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
                        <p className="text-sm text-black mb-2">{product.description}</p>
                        <p className="font-bold text-black mb-2">
                            ${product.price.toFixed(2)}
                        </p>
                        <Link
                            to={`/products/${product.id}`}
                            className="text-black text-sm hover:underline underline-offset-2"
                        >
                            View Details
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}