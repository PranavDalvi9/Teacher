// Upper Bound in LogN Ended

// Description
// You are given n different numbers and an integer k. Write a program that finds upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted list is the index of the first number which is greater than k (here the answer is given considering index to be starting from 0)
// -> Test cases are such that there is always one number greater than k
// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION

// Input
// Input Format
// First line contains N and K
// Second line contains N space separated sorted integers

// Constraints
// N<100

// Output
// Output upper bound


// Sample Input 1 

// 10 3
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 1

// 2
// Sample Input 2 

// 10 4
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 2

// 4




function runProgram(input) {
    input = input.trim().split("\n");
    var a= input[0].trim().split(" ");
    var n = +a[0].trim();
    var k = +a[1].trim();
    var arr = input[1].trim().split(" ").map(Number);
    // console.log(n,k,arr);
    // check(n,k,arr)
    arr = arr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
    // console.log(n,k,arr)
// 	console.log(check(k,arr,0,n-1))
// 	check(n,k,arr)
	console.log(check(n,k,arr))
}

function check(n,k,arr){
    for(var i=0; i<n; i++){
        if(arr[i]>k){
            // console.log(arr[i]);
            return(i)
        }
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
