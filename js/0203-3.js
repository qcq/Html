
function notnull(filed,msg){
		with(filed){
				if(value==null||value==""){
						alert(msg);
					} else {
						var temp = document.getElementById("notnull");
						temp.innerHTML = "������ȷ";
						
					}
				
		}
}
function notphone(field, msg){

	with(field){
		if (new RegExp('\\d{11}').test(value)){
			var temp = document.getElementById("phone");
				temp.innerHTML = "������ȷ";
		} else {
			alert(msg);
		}
	}
}