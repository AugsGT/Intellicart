import Product from '../components/Product';
const products = [
  {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
  {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product1",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  },
   {
    image: "frontend/Intellicart/src/assets/hero.png",
    name: "Product",
    description: "the product",
    price: 2222
  }
];

function ProductPage(){
  return(
    <>
      <h1 style={{textAlign: 'center'}}>Featured Products....</h1>
            <div className='products'>
            {
          products.map((product) => (
            <Product
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price} />
          ))
  }</div></>
);
  }export default ProductPage;