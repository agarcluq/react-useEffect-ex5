import React,{useEffect,useState} from "react";
import "./style.css";

export default function App() {
  // Ejemplo con datos estáticos
// const datos = [
//   {id:1,nombre:'React'},
//   {id:2,nombre:'AngularJs'},
//   {id:3,nombre:'Vue'},
// ]
const [equipo,setEquipo] = useState([])
// Ejemplo con datos estáticos
  // useEffect(()=>{
  //   console.log('hola')
  //    setEquipo(datos)
  // },[])

  // Dinámicos
    useEffect(()=>{
    obtenerDatos()
  },[])

  const obtenerDatos = async () =>{
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json()
    console.log(users)
    setEquipo(users)
  }

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {
          equipo.map(item => 
            (
            <li key={item.id}>{item.name} - {item.username}</li>
            )
          )
        }
      </ul>
    </div>
  );
}
