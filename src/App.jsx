import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card/Card'
import { toast, ToastContainer } from 'react-toast'

function App() {

  const [devmons, setDevmons] = useState([])

  async function fetchData() {

    const apiUrl = 'https://backend-integrar-com-frontend-c290.onrender.com/personagem'


    const response = await fetch(apiUrl).catch(function (error){
      console.error('Erro ao chamar endpoint /personagem', error)
      toast.error('Erro ao garregar lista de DevMons.')
    })

    if (response.ok) {
      const data = await response.json()
      setDevmons(data)
    } else {
      toast.error('Erro ao garregar lista de DevMons.')
    }

    console.error(error)

  }

  useEffect(function () {
    fetchData()
  }, [])

  return (
    <>
      <div className='cards'>
        {devmons.map(function (devmon) {
          return <Card key={devmon.nome} item={devmon} />
        })}
      </div>
      <ToastContainer />
    </>
  )
}

export default App
