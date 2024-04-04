// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let data = [5, 1, 4, 6, 7, 3, 5, 7, 3];
let res = [];

for(let x = 0; x < data.length; x++){
    console.log("SEARCH ELEM: " + data[x]);
    for(let y = 0; y < data.length; y++){
        console.log("LIST ELEM: " + data[y]);
        if(x == y){
            break;
        }
        
        if(data[x] == data[y]){
            if(!res.includes(data[x])){
                console.log("PUSH ELEM: " + data[x]);
                res.push(data[x]);   
            }
            break;
        }
    }
}

console.log("\nQuestion 1: ");
console.log("ANSWER: " + res);

console.log("------------------------");
console.log("Question 2: ");
let chars = [ 1, 2, 3, 4, 5, 6];
for(let z = 0; z <= 6; z++){
    let res = '';
    for(let a = 1; a <= chars[z]; a++){
         res += chars[z] + ' ';
    }
    console.log(res);
}

console.log("---------------------------");

function calculatePercentage(part, whole) {
    return ((part / whole) * 100).toFixed(2);
}

function companyStatistics() {
    console.log("Question 3: ");
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    
    readline.question('Enter the number of male newly hired employees: ', (maleNew) => {
        readline.question('Enter the number of female newly hired employees: ', (femaleNew) => {
            readline.question('Enter the number of male permanent employees: ', (malePerm) => {
                readline.question('Enter the number of female permanent employees: ', (femalePerm) => {
                    readline.question('Enter the number of male resigned employees: ', (maleRes) => {
                        readline.question('Enter the number of female resigned employees: ', (femaleRes) => {
                            readline.close();

                            const totalNew = parseInt(maleNew) + parseInt(femaleNew);
                            const totalPerm = parseInt(malePerm) + parseInt(femalePerm);
                            const totalRes = parseInt(maleRes) + parseInt(femaleRes);
                            const totalEmployees = totalNew + totalPerm - totalRes;

                            console.log('\n===== Company Statistics =====');
                            console.log('Total newly hired employees:', totalNew);
                            console.log('Total permanent employees:', totalPerm);
                            console.log('Total resigned employees:', totalRes);
                            console.log('Total employees in the company:', totalEmployees);
                            console.log('\nPercentage of newly hired males:', calculatePercentage(parseInt(maleNew), totalNew) + '%');
                            console.log('Percentage of newly hired females:', calculatePercentage(parseInt(femaleNew), totalNew) + '%');
                            console.log('Percentage of males in permanent position:', calculatePercentage(parseInt(malePerm), totalPerm) + '%');
                            console.log('Percentage of females in permanent position:', calculatePercentage(parseInt(femalePerm), totalPerm) + '%');
                            console.log('Percentage of males resigned:', calculatePercentage(parseInt(maleRes), totalRes) + '%');
                            console.log('Percentage of females resigned:', calculatePercentage(parseInt(femaleRes), totalRes) + '%');
                        });
                    });
                });
            });
        });
    });
}

companyStatistics();
