

//query(data), it will fetch taht data, then() we'll able to do something else with that JSON data.
const query = (options) => {
    
    // Fetch is a Promise
    // Fetch() is a JS concept that allows you to pull an outside file into the currently active page and then do something with it.
    // Promise, we don't know when it will end, so we start it then move pass it normally in JS

    /*
    Fetch() here is something that gets passed a URL to go fetch 
    and then a set of options that it's going to deal with that URL. 
    In our case, we're going to pick our URL of our data API dot PHP.
    That's the file that we want to fetch you whenever we do a query we're querying our API.
    */
    return fetch('data/api.php',{
        method:'POST',
        //JSON.stringify as like json_encode, it will take a data object and turns it into JSON text
        body: JSON.stringify(options),
        //we are expecting JSON data being sent in and being brought back
        header:{'Content-Type':'application/json'}
    }).then(d=>d.json())
    // then() is a concept of Promise. Promise work on an idea of start its code run, and then()doing something else.
}

//query({type:'users_all'}).then(d=>console.log(d))



/*currying functions is functions that make function
  const templater = () => () =>
*/
const templater = f => a => 
//if passed a is array is an array, but if a is not an array will make a an array
    (Array.isArray(a)?a:[a])
    .reduce((r,o,i,a)=>r+f(o,i,a), '');