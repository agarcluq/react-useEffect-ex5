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
    console.log('hola')

  },[])

  const obtenerDatos = async () =>{
    await fetch('https://jsonplaceholder.typicode.com/users')
  }

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <div>{equipo.map((item,index)=>{
        <p key={index}>{item.equipo}</p>
      })}</div>
    </div>
  );
}
