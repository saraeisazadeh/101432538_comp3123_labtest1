const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            return reject(new Error('Input must be an array!'));
        }
        
        const results = mixedArray
            .filter(item => typeof item === 'string') 
            .map(item => item.toLowerCase()); 

    
        resolve(results);
    });
};


const mixedArray = ['PIZZA', 10, true, false, 'Wings'];


lowerCaseWords(mixedArray)
    .then(output => console.log(output)) 
    .catch(error => console.error(error));
