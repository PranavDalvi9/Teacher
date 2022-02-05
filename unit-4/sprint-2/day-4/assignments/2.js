// Challenge 1A Ended
// Description

// Sam is the owner of gym and he gives advice to all his body-builders and he needs to prepare them such that the sum of their strengths is maximum.

// A builder having original strength s, after eating protein bar of calorie value c will have strength s*c

// Each protein bar can be eaten only once and by only one person.


// Input
// Input Format:

// The first line of the input will consist of n, the number of body-builders as well as the number of protein bars.

// The second line will consist of n space-separated integers s[i], the original strength of body-builders

// The third line consists of n space-separated integers c[i], the calorie value of protein bars.

// Constraints:

// 1 ≤ n ≤ 10^6

// 1 ≤ si ≤ 10^6

// 1 ≤ ci ≤ 10^6


// Output
// Output:

// An integer which is the maximum value of sum of the final strengths of the body-builders that can be obtained.


// Sample Input 1 

// 2
// 3 1
// 4 3
// Sample Output 1

// 15





function runProgram(input) {
	input =input.trim().split("\n");
	var n = +input[0].trim();
	var pArr = input[1].trim().split(" ").map(Number);
	pArr = pArr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
    
	var cArr= input[2].trim().split(" ").map(Number);
	cArr = cArr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
// 	console.log(n,pArr,cArr);
	check(n,pArr,cArr);
}
function check(n,pArr,cArr){
    sum= 0
    for(var i=0; i<n; i++){
        var a = pArr[i]*cArr[i];
        // console.log(a);
        sum += a;
    }
    console.log(sum);
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
