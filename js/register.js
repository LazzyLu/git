$(function(){
//		$("#change-image").click(function(){
//			$(this).children("img").attr({src:'captcha.php?is_login=1&'+Math.random()})
//			})
//		$(".login-fg input").focus(function(){
//			$(this).parent(".text").removeClass("error_ui");
//		}).blur(function(){
//			if($(this).val()=="") {
//				$(this).parent(".text").addClass("error_ui");
//			}
//		});
		$("#yanzhenma").focus(function(){
			
		}).blur(function(){
			yanzhenma_val=$("#seccode").val();
			yanzhenma_val=yanzhenma_val.replace(/^\s*|\s*$/,"");
			if(yanzhenma_val=="" || yanzhenma_val.length!=4) {
				$(".ver-code").addClass("error_ui");
				$(".invalid").show();
				if(yanzhenma_val=="")
				$(".ver-code .required2").html("验证码不能为空");
				else
				$(".ver-code .required2").html("验证码长度不对");
			}
			else
			{
				$("#seccode").removeClass("error_ui");
				$(".invalid").hide();
			}
		});
});
 