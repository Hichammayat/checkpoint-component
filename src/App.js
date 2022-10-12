import logo from './logo.svg';
import './App.css';
import Count from "./component/count"

function App() {
  
  let profile = [{
   nom : "hicham",
   prenom : "mayat",
   image : '',
   success : false,
   address : 'casablanca'}
 
 ]
 const showName = (nom,prenom) =>{
  window.alert(nom+" "+prenom)
 }
 
 
 return (
<>
  <Count/>
  
  

{profile.map(element =>(

<div className="container">
  <div className="card">
    <div className='top-card'>
      <img src=''></img>
    </div>
    <div className='info-card'>
      <h1>{element.nom} {element.prenom}</h1>
      <h2> {element.address}</h2>
      <h3>{element.success ? "admis" : "non admis"} </h3>
    </div>
    <div className='button-card'>
      <button onClick={()=>showName(element.nom,element.prenom)}>show</button>
    </div>
  </div>
</div>

))
}
</>
 )

}


export default App;