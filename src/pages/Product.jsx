import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

const Product = () => {
  // 4- Dynamic route
  const { id } = useParams();

  //5- Individual product load
  const url = "http://localhost:3004/products/" + id;
  const { data: product, loading, error } = useFetch(url);

  return (
    <>
      <p>ID do produto: {id}</p>

      {error && <p>{error}</p>}

      {loading && <p>Carregando...</p>}

      {product && (
        <div>
          <h1>{product.name}</h1>
          <p>R${product.price}</p>
        </div>
      )}
    </>
  );
};

export default Product;
