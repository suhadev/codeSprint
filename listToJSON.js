function fromListToObject(arr){
    let obj ={}
    arr.map((element)=>{
        obj[element[0]] = element[1]
    })
    return obj
}