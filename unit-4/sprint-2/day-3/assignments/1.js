// Coding Club Fight Ended

// Description
// Piyush went to fight for Coding Club. There were N soldiers with various powers. There will be Q rounds to fight and in each round Piyush's power will be varied. With power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). After each round, All the soldiers who are dead in previous round will reborn.Such that in each round there will be N soldiers to fight. Count the number of soldiers that he can kill in each round and total sum of their powers.

// Input
// Input Format
// First line contains N
// Next N line contains N integers which represents power of N soldiers
// Next line contains Q
// Next Q line contains Piyush's power for each of the Q rounds

// Output
// Output Format
// In each line, print the number of soldiers that he can kill in each round and total sum of their powers.

// Sample Input 1 

// 7
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7
// 3
// 3
// 10
// 2
// Sample Output 1

// 3 6
// 7 28
// 2 3



function runProgram(input) {
	input = input.trim().split("\n");
	var n = +input[0].trim();
	var line=1;
	var nArr = [];
	var qArr = [];
	for(var i=0; i<n; i++){
	    var a = +input[line].trim();
	    nArr.push(a);
	    line++;
	}
	
	var q= +input[line].trim();
	line++;
	for(var j=0; j<q; j++){
	    var b = +input[line].trim();
	    qArr.push(b);
	    line++;
	}
// 	console.log(n,nArr);
// 	console.log(q,qArr);
	
	check(n,nArr,q,qArr)
}

function check(n,nArr,q,qArr){
    
    for(var i=0; i<q; i++){
        // console.log(qArr[i],"qArr");
        var count = 0;
        var sum = 0
        for(var j=0; j<n; j++){
            if(qArr[i] >= nArr[j]){
                count++;
                sum += nArr[j]
                //  console.log(nArr[j])
            }
        }
        console.log(count,sum);
    }
    
}
if (process.env.USERNAME === "") {
	runProgram(``);
} else {
	process.stdin.resume();
	process.stdin.setEncoding("ascii");
	let read = "";
	process.stdin.on("data", function (input) {
		read += input;
	});
	process.stdin.on("end", function () {
		read = read.replace(/\n$/, "");
		read = read.replace(/\n$/, "");
		runProgram(read);
	});
	process.on("SIGINT", function () {
		read = read.replace(/\n$/, "");
		runProgram(read);
		process.exit(0);
	});
}