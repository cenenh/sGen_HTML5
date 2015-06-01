//(1)
window.addEventListener('load',init,false);

function init() {
	//(2)
	document.forms[0].button.addEventListener('click',drawing,false);
	
	function drawing(){
		/* (3)
		 * */
		var selectNum = document.forms[0].selectNum.value;
		var startNum = document.forms[0].startNUM.value;
		var endNum = document.forms[0].endNUM.value;
	
		var numArray = new Array;
		var randomNum;
		var overlappingFlag;
		
		while(selectNum){
			//(4)
			randomNum = Math.floor( (Math.random() * (endNum - startNum + 1)) + startNum );
			overlappingFlag = false;
			for(var a in numArray){
				if(numArray[a] == randomNum || randomNum == 0){
					overlappingFlag = true;
					break;
				}
			}
			if(!overlappingFlag){
				numArray.push(randomNum);
				selectNum--;
			}
		}//while
		
		//랜덤추출 후 정렬 함수
		//(5)
		//(6)
		numArray.sort(function(left,right){
			return left - right;
		});
		//console.log(numArray.join());
		document.getElementById('console').innerHTML = numArray.join();
		
	}//drawing
}//init