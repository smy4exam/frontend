import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const location = useLocation();
    const isActive = (path: string) => location.pathname === path;

    const base = "px-4 py-2 text-sm transition-colors duration-150";
    const active = `${base} text-black font-bold border-b-2 border-black`;
    const normal = `${base} text-black/60 hover:text-black`;

    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-3xl mx-auto flex justify-center gap-6">
                <Link to="/" className={isActive("/") ? active : normal}>
                    홈
                </Link>
                <Link to="/products" className={isActive("/products") ? active : normal}>
                    상품 목록
                </Link>
                <Link to="/products/new" className={isActive("/products/new") ? active : normal}>
                    상품 등록
                </Link>
            </div>
        </nav>
    );
}
