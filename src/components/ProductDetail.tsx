import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { productService } from '../services/api';
import type { Product } from '../types/Product';

function ProductDetail() {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<Product | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                if (!id) return;
                // id 문자열 → 숫자 변환
                const data = await productService.getById(Number(id)).then(res => res);
                setProduct(data);
            } catch (err) {
                alert('상품을 불러오지 못했습니다.');
                console.error(err);
            }
        };
        fetchProduct();
    }, [id]);

    if (!product) {
        return <div className="text-center mt-10">로딩 중...</div>;
    }

    return (
        <div className="space-y-4">
            <h2 className="text-2xl font-bold text-black">{product.name}</h2>
            <p className="text-gray-700">{product.description}</p>
            <p className="font-semibold text-black">₩{product.price.toLocaleString()}</p>
        </div>
    );
}

export default ProductDetail;
