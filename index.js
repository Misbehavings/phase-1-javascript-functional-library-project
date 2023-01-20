function myEach(collection, callback) {
    if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      }
      else{
        for (const property in collection) {
          callback(collection[property], property, collection)
        }
      }

      return collection
}

function myMap(collection, callback) {
    let newCollection = []

      if (collection instanceof Array) {
        for (let i = 0; i < collection.length; i++) {
          newCollection.push(callback(collection[i], i, collection))
        }
      }
      else{
        for (const [key, value] of Object.entries(collection)) {
          newCollection.push(callback(value, key, collection))
        }
      }

      return newCollection
}

function myReduce(collection, callback, acc) {
    const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      if (acc) {
        for (const e of arrayCollection) {
          acc = callback(acc, e, arrayCollection)
        }
      return acc;
      }
      else {
        let acc = arrayCollection[0];
        for (const e of arrayCollection.slice(1)) {
          acc = callback(acc, e, arrayCollection)
        }
        return acc;
      }
      }


function myFind(collection, predicate) {
    for (const e of collection) {
        if (predicate(e)) {
          return e
        }
      }
}

function myFilter(collection, predicate) {
    const arrayCollection = (Array.isArray(collection))? collection : Object.values(collection)
      const newArray = []
      for (const element of arrayCollection) {
        if (predicate(element)) {
          newArray.push(element)
        }
      }
      return newArray
}

function mySize(collection) {
    let newCollection = (collection instanceof Array) ? collection : Object.values(collection)

      return newCollection.length
}

function myFirst(array, n=1) {
    return (n === 1)? array.slice(0, n)[0] : array.slice(0, n)
}

function myLast(array, n=-1) {
    return (n === -1)? array.slice(n)[0] : array.slice(-n)
}

function myKeys(obj) {
    const keys = [];
      for (const key in obj) {
        keys.push(key)
      }
      return keys
}
 function myValues(obj) {
    const values = [];
      for (const key in obj) {
        values.push(obj[key])
      }
      return values
 }