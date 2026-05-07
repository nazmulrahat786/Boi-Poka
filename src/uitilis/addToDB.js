import Swal from 'sweetalert2'
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
 Swal.fire({
  title: "Vai already Add kora hoisa🙂‍↕️",
  icon: "error",
  draggable: false,
  allowOutsideClick: false
});
}
else{
    storeBookData.push(id)
    const data =JSON.stringify(storeBookData)
    localStorage.setItem("readList",data)
      Swal.fire({
      title: "Add korc vai😁",
      icon: "success",
      draggable: true
    });

}

}
export {addToStoreDB,getStoredBook}