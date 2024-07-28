import { createContext, useState ,useEffect} from "react";
import { useNavigate } from "react-router-dom";
 
export const FoodContext=createContext()

function GlobalState({children}){
const [search,setSearch]=useState('')
const [loading,setLoading]=useState(false)
const [error,setError]=useState(null)
const [recipes,setRecipe]=useState({})
const [Favorites,setFavorites]=useState([])

const navigate=useNavigate()
function handleFav(recipes){
setFavorites(prevRec=>{
  if(prevRec.some(fav=>fav.label===recipes.label)){
    return prevRec.filter(fav=>fav.label!==recipes.label)
  }else{
    return [...prevRec,recipes]
  }
})
}

async function fetchData(){
  const apiKey="08611a88208218e931b74463abd88f26"
  const apiId='fed87aaa'
  setLoading(true)
  try{
   const response=await fetch(`https://api.edamam.com/search?q=${search}&app_id=${apiId}&app_key=${apiKey}`);
   const data=await response.json()

if(data?.hits){
  setRecipe(data.hits)
  setLoading(false)
  navigate('/')
}

  }catch(e){
   
    setError(e)
    setSearch('')
  }
}
function handleDeleteFavorites(favorites){
  setFavorites(prevFav=>prevFav.filter(fav=>fav.label!==favorites.label)  )
}
useEffect(()=>{fetchData()},[search])
  return(
    <FoodContext.Provider value={{loading,search,recipes,setSearch,Favorites,setFavorites,handleFav,handleDeleteFavorites}}>
      {children}
    </FoodContext.Provider>
  )
}
export default GlobalState