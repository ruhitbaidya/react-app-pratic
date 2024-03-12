const checkLocalStore = ()=>{
    const checkStorage = localStorage.getItem("cart");
    if(checkStorage){
        return JSON.parse(checkStorage)
    }
    return [];
}


const addTolocalStore = (id)=>{
    const findStore = checkLocalStore();
     findStore.push(id);
     addingItems(findStore);
}

const addingItems = (data)=>{
    console.log(data)
    const stringData = JSON.stringify(data);
    localStorage.setItem("cart", stringData);
}

const removeFromLS = (id)=>{
    const cart = checkLocalStore();
    const lsStore = cart.filter((finItem)=> finItem !== id);
    console.log(lsStore)
    addingItems(lsStore)
}

export {addTolocalStore, checkLocalStore, removeFromLS, addingItems}