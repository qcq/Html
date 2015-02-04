function clickall(field){
	with(field){
		var temp = document.getElementsByName("same");
		if (id == "all"){
			
			
			if (field.checked){
				for (var i=0;i < temp.length; i++){
					temp[i].checked=true;
				}
			} else {
				for (var i=0;i < temp.length; i++){
					temp[i].checked=false;
				}
			}
		
		} else if (id=="reverse"){
			if (field.checked){
				for (var i=0;i < temp.length; i++){
					temp[i].checked = !temp[i].checked;
				}
			}
		} else if (id == "front"){
			if (field.checked){
				for (var i=0;i < 5; i++){
					temp[i].checked = true;
				}
				for (var i=5;i < 10; i++){
					temp[i].checked = false;
				}
			}
		} else if (id =="behind"){
			if (field.checked){
				for (var i=0;i < 5; i++){
					temp[i].checked = false;
				}
				for (var i=5;i < 10; i++){
					temp[i].checked = true;
				}
			}
		}
	}
}