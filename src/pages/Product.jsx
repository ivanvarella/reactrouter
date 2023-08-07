import { useParams  } from "react-router-dom"

const Product = () => {
    // 4- Dynamic route
    const { id } = useParams();

  return (
    <>
        <p>ID do produto: {id}</p>
    </>
  )
}

export default Product