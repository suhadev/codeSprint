function transformEmployeeData(arr){
    var transformEmployeeList =[]

    arr.map((el)=>{
        let obj ={}
        el.map((e)=>{
            obj[e[0]] = e[1]
        })
        transformEmployeeList.push(obj)
    })
    return transformEmployeeList
}