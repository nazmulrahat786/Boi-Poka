const getStoredBook = ()=>{
    const storeBookSTR = localStorage.getItem("readList")
    if( storeBookSTR){
        const  storeBookData = JSON.parse(storeBookSTR)
        return storeBookData
        }
        else{
            return[]
        }
    
}
const addToStoreDB = (id)=>{
const storeBookData = getStoredBook()

if (storeBookData.includes(id)){
    alert("Vai aita asa storage")
}
else{
    storeBookData.push(id)
    const data =JSON.stringify(storeBookData)
    localStorage.setItem("readList",data)

}

}
export {addToStoreDB,getStoredBook}