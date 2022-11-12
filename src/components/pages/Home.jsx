import { API_URL } from "../../constants/env"
import MainHeader from "../organisms/MainHeader"

function Home() {
  return (
    // 2. paso: se crea página Home y se coloca en pages
      <>
      <div className="App">
         <h1>Hola {API_URL}</h1>
         <p>Este es el sitio en desarrollo</p>
     </div>
      </>
  )
}

export default Home
