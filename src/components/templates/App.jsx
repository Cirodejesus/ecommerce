import { Outlet } from "react-router-dom"
import MainHeader from "../organisms/MainHeader"

 // 5. paso: se crea la carpeta templates y tambien se crea este archivo App.jsx
 // 6. paso: se agrega el coponente <MainHeader/>
 /** 7 paso: esta archivo va hacer el template para las paginas que yo quiera
     con <Outlet/> recibe las paginas que yo quiera
     App imprime lo que contenga MainHeader
  */
const App = () => {
  return (
    <div>
      <MainHeader/>
      {/*<Outlet/> Representa el elemento de la ruta secundaria, si lo hay. 
      se le puede agregar las rutas a un footer o aun sidebar o a un Header, portador */}
      <div className="pt-16 max-w-256 m-auto">
      <Outlet/>
      </div>
    </div>
  )
}

export default App
