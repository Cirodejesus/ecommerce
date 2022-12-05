import useFetch from '../../hooks/useFetch'
import Loader from '../atoms/Loader'
import ProductCard from '../molecules/header/ProductCard'

const Products = () => {
  // se desestructura el objeto
  const { data, error, loading } = useFetch('public/products')

  // Si estas cargando retorna un loading
  if (loading) return <Loader />
  if (error) return <div>{error?.message}</div>
  {
    /* data por cada producto que tengas quiero que me pintes en el navegador un <div></div> */
  }

  return (
    <section className="py-16 max-w-256 m-auto">
      <h1 className="text-3xl mb-6">Explora nuestro productos</h1>
      <div className="grid grid-cols-4 gap-6">
        {data.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}

export default Products

//rafce: para crear funciones de flecha con codigo
