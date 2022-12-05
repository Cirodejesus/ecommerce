//Aca en el Router se crean todas las paginas de nuestro ecommmerce
import { createBrowserRouter } from 'react-router-dom'
import Home from '../components/pages/Home'
import Error404 from '../components/pages/error404'
import Products from '../components/pages/Products'
import App from '../components/templates/App'
import Login from '../components/pages/Login'
import Register from '../components/pages/Register'
import Form from '../components/pages/admin/products/Form'
import Table from '../components/pages/admin/products/Table'

/** 2. Recibe un array de cada una de las rutas que yo quiero, va a hacer un objeto.
  Todas las rutas de mi aplicación pasan por aquí
   3. paso: se crea pagina de ruta Products y se coloca en pages
   6. se coloca App en vez de Home
   7. Se agrega un listado de hijos con children y los hijos van a hacer un array
   index hace parte del path: '/', que es un atributo booleano: index: true */
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/productos',
        element: <Products />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Register />,
  },
  {
    path: '/admin/productos/',
    element: <Table />,
  },
  {
    path: '/admin/productos/crear',
    element: <Form />,
  },
])

export default router
