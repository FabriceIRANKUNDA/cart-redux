import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const Products = (props) => {
  const products = [
    {
      id: "p1",
      price: 6,
      title: "My First Book",
      description: "The first book I ever wrote",
    },
    {
      id: "p2",
      price: 6.5,
      title: "My second Book",
      description: "The first book I ever wrote",
    },
    {
      id: "p3",
      price: 8,
      title: "My third Book",
      description: "The first book I ever wrote",
    },
  ];
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
