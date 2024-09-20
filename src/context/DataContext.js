import { createContext, useState } from "react";

const DataContext = createContext();
function DataProvider({children}){
    const [userInfo,setUserInfo] = useState(null);
    const [favoriteStyle,setFavoriteStyle] = useState([]);
    const [cart, setCart] = useState([]);
      const value = {
        userInfo,setUserInfo,
        favoriteStyle,setFavoriteStyle,
        cart, setCart
      }
    return (
        <DataContext.Provider value={value}>
            {children}
        </DataContext.Provider>
    );

}
export {
  DataContext,
  DataProvider
}