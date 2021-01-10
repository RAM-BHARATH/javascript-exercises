function add (a,b) {
	return a+b;
}

function subtract (a,b) {
	return a-b;
}

function sum (arr) {
	let a=arr.reduce((acc,num)=>{
		return acc+num;
	},0);
	return a;
}

function multiply (arr) {
	let a=arr.reduce((acc,num)=>{
		return acc*num;
	},1);
	return a;
}

function power(a,b) {
	return Math.pow(a,b);
}

function factorial(n) {
	let fact=1;
	for(i=0;i<n;i++){
		fact*=i+1;
	}
	return fact;
}
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}