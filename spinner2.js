const spinnerFrames = ['|', '/', '-','\\'];
let delay = 100;

for(let i = 0; i < spinnerFrames.length; i++){
    setTimeout(() => {
        process.stdout.write(`\r${spinnerFrames[i]}`)
    }, delay);
    delay += 200;
}