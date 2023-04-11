import AsyncStorage from "@react-native-async-storage/async-storage";


export async function getFavorites(key){

    let favorites = await AsyncStorage.getItem(key);
    return JSON.parse(favorites) || [];

};

export async function saveFavorites(key, newFavorite){

    let MyFavorites = await getFavorites(key);
    
    let hasItem = MyFavorites.some(item => item.id === newFavorite.id)
    
    if(hasItem){
     
        return;
    }
    MyFavorites.push(newFavorite);
    
    await AsyncStorage.setItem(key, JSON.stringify(MyFavorites));


}

export async function removeFavorite(id) {
    
    let FavoriteReceipes = await getFavorites('@keyFavorite');
    
    let myFavorite = FavoriteReceipes.filter(item => {
        return (item.id !== id);
    })
    
    await AsyncStorage.setItem('@keyFavorite', JSON.stringify(myFavorite));

    return myFavorite;
}

export async function isFavorite(receipe) {
    
    let myFavorite = await getFavorites('@keyFavorite');
    
    const favorite = myFavorite.find(item => item.id === receipe.id);
    
    if(favorite) return true;
    
    return false;
}