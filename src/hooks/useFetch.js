// Se crean nuestros propios Hooks
import axios from 'axios'
import { useEffect, useState } from 'react'
import { API_URL } from '../constants/env'

const useFetch = (endpoint, headers = {}) => {
  // Se crean 3 estados
  const [data, setData] = useState()
  const [error, setError] = useState()
  const [loading, setLoading] = useState(true)

  /**Por aquí se pasan los estados, data, Error, loading,
   * Se pide los endpoind o productos de la base de datos*/
  useEffect(() => {
    axios
      .get(`${API_URL}/${endpoint}`)
      .then((resp) => {
        setData(resp.data.data)
      })
      .catch((err) => {
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  return { data, error, loading }
}

export default useFetch
// con este componente se hace las peticiones que queramos
