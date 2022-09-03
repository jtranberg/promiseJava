const cat = new Promise((resolve, reject) => {
    const rand = Math.random();
    if (rand < 0.5) {
        resolve();
    }
    else {
        reject();
    }
})
cat.then(() => {
    console.log('yahh, we have a cat');
}) 
cat.catch(() => {
    console.log('no cat');
});