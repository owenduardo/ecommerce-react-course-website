import ProductCard from "../components/ProductCard";
import { getProducts } from "../data/product";

export default function Home() {
  const products = getProducts();
  
  return (
    <div className="page">
      <div className="home-hero">
        <h1 className="home-title">Welcome to SlurpTumbler</h1>
        <p className="home-subtitle">
          Slurp Tumbler creates handmade custom shakeable tumblers...
        </p>
      </div>
      
      <div className="container">
        <h2 className="page-title"> Our Product </h2>
        <div className="product-grid">
          {products.map((product) => (
            /* FIX: Put the unique key prop here, on the component itself */
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}