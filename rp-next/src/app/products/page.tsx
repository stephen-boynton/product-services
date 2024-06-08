import { getProducts } from './_actions'

export default async function ProductsPage() {
  const products = await getProducts({ limit: 10 })
  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </main>
  )
}
