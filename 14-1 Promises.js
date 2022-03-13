/**
 * Promises - Challenge
 * Create a promise that returns some user data and throws an error when not found.
 * Log the user data when listening to the promise as well as log the error.
 * 
 * Docs - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
*/


const userData = () => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      let error = false;
      if (error) {
        reject('Sorry Can\'t find data');
      } else {
        resolve({
          firstName: 'Aditya',
            age: 32,
            email: 'AdityaEmail310@gmail.com'
        })
      }
    }, 3000);
  })
}

userData()
.then((success)=> console.log(success))
.catch((error)=> console.log(error));