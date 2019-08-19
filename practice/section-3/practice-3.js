'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var newArr = [];
  var map = new Map();
  for (var i=0;i<collectionA.length;i++){
    if (map.get(collectionA[i])==null){
      map.set(collectionA[i],1);
    }else{
      map.set(collectionA[i],map.get(collectionA[i])+1);
    }
  }

  map.forEach(function(key,value){
    newArr.push({key:value,count:key})
  });
  console.log(newArr);


  var  collectionB = objectB.value;
  for (var i = 0;i < newArr.length;i++)
  {

    for (var j = 0;j<collectionB.length;j++)
    {
      if (newArr[i].key == collectionB[j])
      {
        var temp = newArr[i].count % 3;
        var  a = (newArr[i].count - temp) / 3;
        newArr[i].count = newArr[i].count - a;
      }
    }
  }
  return newArr;
}
