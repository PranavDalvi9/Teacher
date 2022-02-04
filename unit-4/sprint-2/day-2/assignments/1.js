// Binary Search - Recursive Ended

// Description
// Given n distinct numbers, implement a recursive binary search to check the presence of target number k.
// In case k is present among those n numbers, print 1
// Else print -1

// Input
// Input Format :
// First line of input contains n and k separated by a space
// Next line contains n space separated integers

// Constraints:
// n<1000

// Output
// In casekis present among those n numbers, print 1
// Else print -1

// Sample Input 1 

// 5 0
// 2 -2 0 3 4
// Sample Output 1

// 1




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
	check(k,arr,0,n-1)
}

function check(k,arr,start,end){
    // console.log(k)
    var mid = Math.floor((start + end)/2) ;
    if(start <= end){
   
        if(arr[mid] ==k){
            console.log(1)
            return;
        }
        else if(k < arr[mid]){
       check(k,arr,start,mid-1)
        }
        
        else{
           check(k,arr,mid+1,end)
        }
    }
    else{
        console.log(-1)
        return;
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
