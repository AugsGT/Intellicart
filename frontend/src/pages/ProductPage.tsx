import Product from '../components/Product';
import { useProducts } from '../context/ProductContext';

function ProductPage() {
  const { products } = useProducts();

  return (
    <>
      <div className="page-header">Featured Products</div>
      {products.length === 0 ? (
        <h2 style={{ textAlign: 'center', marginTop: '50px', color: '#94a3b8' }}>No products available. Check back later!</h2>
      ) : (
        <div className='products'>
          {products.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price} 
            />
          ))}
        </div>
      )}
    </>
  );
}

export default ProductPage;