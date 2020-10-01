exports.renderHomePage = (req, res) => {
    res.render('index', { title: 'String Parser',stringarr:'' });
  }

 
exports.getStringversionOne = (req,res) => {
  console.log("version one");
  var str = req.body.string
  var strModifiedArr = versionOne(str)
  var output = {
      "statusCode":res.statusCode,
      "data":{
          "firstName":strModifiedArr[0],
          "lastName":strModifiedArr[1],
          "clientId":strModifiedArr[2]
      }
  }
  res.render('index', { stringarr: JSON.stringify(output),title: 'String Parser' });
}

exports.getStringversionTwo = (req,res) => {
    //console.log("version one");
    var str = req.body.string
    var strArr = versionOne(str)
    console.log(strArr)
    var strModifiedArr = []
    if(Array.isArray(strArr)){
        strArr.forEach(elem=>{
            console.log(elem+"elem")
            if(assertStrThreeZeros(elem) || assertStrFourZeros(elem)){
                var value = elem.replace(/0+/, '')
                strModifiedArr.push(value)
                console.log(strModifiedArr+"strModifiedArr")
                console.log(strModifiedArr+"strModifiedArr")
            }
            var reg = /^\d+$/
            if(reg.test(elem)){
               var value = elem.split(/^(\d{3})/).join('-');
               var splitVal = value.substring(1)
               strModifiedArr.push(splitVal)
               console.log(strModifiedArr+"strModifiedArr")
            }
        })
    }
    var output = {
        "statusCode":res.statusCode,
        "data":{
            "firstName":strModifiedArr[0],
            "lastName":strModifiedArr[1],
            "clientId":strModifiedArr[2]
        }
    }
    res.render('index', { stringarr: JSON.stringify(output),title: 'String Parser' });
  }

function versionOne(str){
    var strTrailingFourzeros = assertStrFourZeros(str)
  var strArray = []
  if(strTrailingFourzeros){
   strArray = [...strFindFourzeros(str)]
 }
 //console.log("strArray"+strArray)
 strModifiedArr = []
  if(Array.isArray(strArray)){
      strArray.forEach(elem=>{
          
          //console.log(assertStrThreeZeros(elem)+"assertStrFourZeros(elem)")
         if((assertStrThreeZeros(elem)==true) && (assertStrFourZeros(elem)==false)){
            var localArr = strFindThreezeros(elem)
            //console.log(localArr)
            strModifiedArr.concat(localArr)
            if(Array.isArray(localArr)){
                localArr.forEach(elem=>{
                    strModifiedArr.push(elem)
                })
            }
            //console.log(strModifiedArr)
         }else{
            strModifiedArr.push(elem)
            //console.log(strModifiedArr)
         } 
      })
  }
  return strModifiedArr
}

function strFindFourzeros(str){
    return str.split(/(?<=0000)/); 
}
function assertStrFourZeros(str){
    fourZerosRegex = /(0000)/
    //console.log("fourZerosRegex.test(str)"+fourZerosRegex.test(str))
    return fourZerosRegex.test(str)
}
function strFindThreezeros(str){
    //console.log("strFindThreezeros(str)"+str.split(/(?<=000)/))
    return str.split(/(?<=000)/); 
}

function assertStrThreeZeros(str){
    fourZerosRegex = /(000)/
    //console.log("fourZerosRegex.test(str)"+fourZerosRegex.test(str))
    return fourZerosRegex.test(str)
}