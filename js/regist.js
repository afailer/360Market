window.onload=function(){
	var phone = document.getElementById("phone_num");
	var pwd = document.getElementById("pwd");
	var next = document.getElementById("next");
	var regPhone=/^1[3,8,5,7]\d{9}$/;
	var regPwd = /^[a-zA-Z]{2}.{4,}/;
	var flagPhone=false;
	var flagPwd=false;
	phone.onblur=function(){
		flagPhone=regPhone.test(phone.value);
		if(flagPhone==false){
			document.getElementById("isGoodP").innerHTML="请输入正确的电话号码";
		}else{
			document.getElementById("isGoodP").innerHTML="";
		}
	}
	pwd.onblur=function(){
		 flagPwd= regPwd.test(pwd.value);
		 if(flagPwd==false){
		 	document.getElementById("isGoodpwd").innerHTML = "请输入至少6位数的密码,前两位为字母";
		 }else{
		 	document.getElementById("isGoodpwd").innerHTML="";
		 }
	}
	document.getElementById("next").onclick=function(){
		if(flagPhone==false){
			phone.onblur();
			return;
		}
		if(flagPwd==false){
			pwd.onblur();
			return;
		}
		location.href="index.html"
	}
}
