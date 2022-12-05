import { Link } from 'react-router-dom'
import useFetch from '../../../../hooks/useFetch'
import Loader from '../../../atoms/Loader'

const Table = () => {
  // se desestructura el objeto
  const { data, error, loading } = useFetch('public/products')

  // Si estas cargando retorna un loading
  if (loading) return <Loader />
  if (error) return <div>{error?.message}</div>
  {
    /* data por cada producto que tengas quiero que me pintes en el navegador un <div></div> */
  }

  return (
    <div className="max-w-256 m-auto">
      <section className="pt-10">
        <h1 className="text-4xl mb-6">Productos</h1>
        <div className="pt-1 mb-12 pb-1">
          {/*Link aqui lleva a la seccion agregar productos */}
          <Link className="bg-gradient button" to="/admin/productos/crear">
            Agregar producto
          </Link>
        </div>
        <table className="overflow-x-scroll">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Editar</th>
              <th>Borrar</th>
            </tr>
          </thead>
          <tbody>
            {data.length === 0 && (
              <tr>
                <td colSpan={4}>No existen productos actualmente</td>
              </tr>
            )}
            {data.map((prod) => (
              <tr key={prod.id}>
                <td>{prod.product_name}</td>
                <td>{prod.price}</td>
                <td>
                  <Link to={`/admin/productos/editar/${prod.id}`}>Editar</Link>
                </td>
                <td>
                  <a
                    className="text-red-600 hover:cursor-pointer"
                    onClick={() => deleteProduct(prod)}
                  >
                    Eliminar
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  )
}
export default Table

//rafce: para crear funciones de flecha con codigo
