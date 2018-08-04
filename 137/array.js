
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5]);

function isUniform(arr){
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== arr[0]){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var sum = 0;
	for(var i = 0; i < arr.length; i++){
		sum+=arr[i];
	}
	return sum;
}

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(max < arr[i]){
			max = arr[i];
		}
	} 
	return max;
}
