import ProductList from "./ProductList";

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <h1>
          <i className="fa fa-shopping-bag" aria-hidden="true"></i> Welcome to
          Simple Shop
        </h1>
        <p>Hand-picked items — fast and simple shopping.</p>
      </div>
      <ProductList />
    </div>
  );
}

export default Home;
