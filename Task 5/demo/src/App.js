import "./App.css";
import useFetch from "./useFetch";

function App() {
  const {
    data: products,
    loading,
    error,
    refetch,
  } = useFetch("https://api.escuelajs.co/api/v1/products");

  return (
    <div className="app">
      <h1 className="title">Products</h1>

      {loading && <p className="status">Loading products...</p>}

      {error && <p className="status error">{error}</p>}

      {!loading && !error && (
        <>
          <div className="product-grid">
            {products?.map((p) => (
              <div key={p.id} className="product-card">
                <img
                  src={p.images[0]}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                  }}
                />

                <h3>{p.title}</h3>
                <p className="price">₹ {p.price}</p>

                <button className="cart-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
