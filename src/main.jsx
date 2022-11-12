import  router  from './router/Router'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
/* 1. paso:<RouterProvider/> viene integrado con react-router-dom 6.4.3,
   especifica las rutas a nuesta aplicación
   que a su se descarga el paquete al package.json.
  codigo de descarga: yarn add react-router-dom              */
 
<RouterProvider router={router}/>

 )
