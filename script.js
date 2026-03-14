var nums = [];
let numt = 0;

for(let i = 0; i < 5; i++) {

    do {
        numt = Math.floor(Math.random() * 50) + 1;
    } while (nums.includes(numt)); 
    
    nums.push(numt);
}

document.getElementById("numeros").innerText = nums;

var ests = [];
let estt = 0;

for(let e = 0; e < 2; e++) {

    do {
        estt = Math.floor(Math.random() * 12) + 1;
    } while (ests.includes(estt)); 
    
    ests.push(estt);
}


document.getElementById("estrelas").innerText = ests;
