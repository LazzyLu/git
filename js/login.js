	function jssubmit() {
        var _hint	= $(".invalid .required");
        var email	= $("#emailphone").val();
        var password = $("#password").val();
        var postdata = {};
        var imghtml	= "";
//      var url		= "user.php?act=signin";
//      var refer	= "http://www.wm18.com/";
//		var _seccode = $("#seccode");
//		var seccodeval = _seccode.val();
//      //email
        if(!email) {
			$("#emailphone").parent(".text").addClass("error_ui").focus();
            _hint.html(imghtml + "账号或邮箱或手机号未填写或格式不正确").show();
            return false;
        }else{
			$("#emailphone").parent(".text").removeClass("error_ui").blur();
			_hint.hide();
			}
		
        postdata['username'] = email;
		//alert(postdata['username']);
        //用户密码
		
        if(!password) {
			$("#password").parent(".text").addClass("error_ui").focus();
            _hint.html(imghtml + "请填写密码").show();
           return false;
        }else{
			$("#emailphone").parent(".text").removeClass("error_ui").blur();
			_hint.hide()
			}
        postdata['password'] = password;
//      //验证码
////		if(!seccodeval) {
////          _seccode.addClass("error_ui").focus();
////          _hint.html(imghtml + "请填写验证码").show();
////          return false;
////      }else{
////          _seccode.removeClass("error_ui").blur();
////          _hint.hide()
////          }q
//      //是否保存登录
//      if($('#remember').attr("checked") == 'checked')
//      {
//          postdata['remember']    = "1";
//      }
//		
//      postdata['loginsubmit']	= 1;
//      postdata['formhash']	= "7797359c";
//		postdata['captcha'] = seccodeval;
//		
//
//		
//      $.post(url,postdata,function(data) {
//          if(data.msg == "success") { //如果登录成功
//				if(postdata['back_act']){
//					window.location.href = postdata['back_act'];
//				}else{
//					//window.location.href = 'index.php';
//                  if(document.referrer != 'http://www.wm18.com/user.php?act=register_new')
//                  {
//					   self.location=document.referrer;
//                  }else{
//                     window.location.href = 'index.php';
//                  }
//				}
//              //window.location.reload();
//          } else if(data.msg == "failure") {
//              _hint.html(imghtml + data.text).show();//提示错误
//              //_forseccode.show();
//              //nextsec();
//          }
//			else{
//				alert(data);
//			}
//      },"json");
    }
	var code;
    function createCode(){
        //首先默认code为空字符串
        code = '';
        //设置长度，这里看需求，我这里设置了4
        var codeLength = 4;
        var codeV = document.getElementById('verification');
        //设置随机字符
        var random = new 
 Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z','a','b','c','d','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z');
        //循环codeLength 我设置的4就是循环4次
        for(var i = 0; i < codeLength; i++){
            //设置随机数范围,这设置为0 ~ 36
             var index = Math.floor(Math.random()*61);
             //字符串拼接 将每次随机的字符 进行拼接
             code += random[index]; 
        }
        //将拼接好的字符串赋值给展示的Value
//      alert(code);
        codeV.innerHTML = code;
    }

    //下面就是判断是否== 的代码，无需解释
//  function validate(){
//      var oValue = document.getElementById('seccode').value.toUpperCase();
//      var oCode = document.getElementById('verification').innerHTML.toUpperCase();
//      alert(oValue);
//      if(oValue ==0){
//     //     alert('请输入验证码');
//      }else if(oValue != oCode){
//          alert('验证码不正确，请重新输入');
//          oValue = '';
//          createCode();
//      }else{
//          window.open('http://www.baidu.com','_blank');
//      }
//  }

    //设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
    window.onload = function (){
        createCode();
    }
    