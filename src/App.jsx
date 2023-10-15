import { useEffect, useState } from 'react'
import Maps from './components/Maps'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  let [data,setData] = useState(null)
  useEffect(()=>{
      async function fetch_data(){
          let res = await fetch('https://laskapikisansevak-production.up.railway.app/api/retailers/Maharashtra',{
            headers:{"Content-Type":"application/json"},
            method:"GET"
          }).then((res)=>{
            return res.json()
          })
          setData((element)=>({
            ...element,...res
          }))
      }
      fetch_data()
  },[])
  return (
    <>

      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Maps data={data}/>}/>
          </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
