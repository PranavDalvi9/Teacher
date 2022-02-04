// Party or Not Ended

// Description
// Ashutosh has N friends and he wants to give a party to his C friends on his birthday. Ashutosh knows the amount he will have to spend on each of his N friends in party. Given the expense amount of each of the N friends, comment if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.

// Input
// Input Method
// First line contains three space separated integers: N, C and R respectively
// Second line contains N space separated integers which represents the amount he needs to spend on each of his N friends.

// Constraints

// N <= 1000

// C is lesser than N

// R < 10000


// Output
// Output Method
// If it is possible to give party to C friends, print "Party"
// Else print "Sad".

// Sample Input 1 

// 5 3 24
// 6 4 21 20 13
// Sample Output 1

// Party
// Hint

// Sample 1 Explanation

// In this case, he can take 3 of his friends to party with 24 rupees in his pocket.


function runProgram(input) {
	input = input.trim().split("\n");
	var a = input[0].trim().split(" ");
	var n= +a[0].trim();
	var c = +a[1].trim();
	var r = +a[2].trim();
	
	var arr= input[1].trim().split(" ").map(Number);
	    arr = arr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
	
// 	console.log(n,c,r,arr);
	check(n,c,r,arr);
}

function check(n,c,r,arr){
    var sum = 0;
    for(var i=0; i<c; i++){
        sum += arr[i] 
    }
    // console.log(sum,r)
    if(sum <= r){
        console.log("Party");
    }
    else{
        console.log("Sad");
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
