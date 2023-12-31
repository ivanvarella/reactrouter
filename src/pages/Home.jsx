import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

import "./Home.css";

const Home = () => {
  // 3- Data load
  const url = "http://localhost:3004/products";

  const { data: items, error } = useFetch(url);

  return (
    <div>
      <h1>Produtos</h1>
      {error && <p>{error}</p>}
      <ul className="products">
        {items &&
          items.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <p>R$ {item.price}</p>
              {/* 4- Dynamic Route  */}
              <Link to={`/products/${item.id}`}> Ver mais detalhes </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Home;
