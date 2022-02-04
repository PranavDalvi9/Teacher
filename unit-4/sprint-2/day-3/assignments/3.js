// Dance Night! Ended

// Description
// Masai School will be hosting its Prom Night on 29th Feb.There would be M boys and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than him. A girl can dance with only one boy and vice-versa.
// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.

// Input
// The first line contains T denoting the number of test cases.
// Each test case contains three lines.
// The first line contains M and N.
// The second line contains M integers each denoting the height of boy.
// The third contains N integers each denoting the height of girl.

// Constraints

// 1<=T<=10

// 1<=N, M<=10000

// 1<=Height<=200


// Output
// Print YES if it is possible for each boy to get a girl else print NO.


// Sample Input 1 

// 1
// 4 5
// 2 5 6 8
// 3 8 5 1 7
// Sample Output 1

// YES




function runProgram(input) {
	input = input.trim().split("\n");
	var test = +input[0].trim();
	var line= 1;
	for(var i=0; i< test; i++){
	       var a = input[line].trim().split(" ");
	        var m = +a[0].trim();
	        var n = +a[1].trim();
	        line++;
	        var mArr = input[line].trim().split(" ").map(Number);
	        line++;
	            mArr = mArr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
	        var nArr = input[line].trim().split(" ").map(Number);
	       nArr = nArr.sort(function(a,b){
        if(a>b) return 1;
        if(b>a)return -1;
        return 0;
    })
	        line++;
	       // console.log(m,n,mArr,nArr);
	        check(m,n,mArr,nArr)
	}
}

function check(m,n,mArr,nArr){
    var count = 0
    
    if(m <= n){
        for(i=0; i<m ; i++){
        if(mArr[i] > nArr[i]){
            count++;
        }
    }
    }
    
    if(count === m){
        console.log("YES")
    }
    else{
        console.log("NO")
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
