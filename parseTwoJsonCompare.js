function assertObjectsEqual(actual, expected, testName){
    console.log(actual)
    let obj1 = actual
    let obj2 = expected
    console.log(testName)
    let expectedKeys = Object.keys(expected)
    let expectedValues = Object.values(expected)

    let actualKeys = Object.keys(actual)
    let actualValues = Object.values(actual)
    let keysMatch = compareArray(expectedKeys,actualKeys)
    let valuesMatch = compareArray(expectedValues,actualValues)
    if(keysMatch & valuesMatch){
        console.log("Passed")
    } else{
        console.log(`Failed Expected${JSON.stringify(obj1)} but got ${JSON.stringify(obj2)}`)
    }


    function compareArray(a1,a2){
        for(let i=0;i<a1.length;i++){
            if(a1[i] === a2[i]){
                return true
            } else{
                return false
            }
        }
    }
   }