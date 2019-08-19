'use strict';

function countSameElements(collection) {
  var newArr = [];
  var map = new Map();
  for (var i=0;i<collection.length;i++){
    if (map.get(collection[i])==null){
      map.set(collection[i],1);
    }else{
      map.set(collection[i],map.get(collection[i])+1);
    }
  }
  map.forEach(function(key,value){
    newArr.push({key:value,count:key})
  });
  return newArr;
}
