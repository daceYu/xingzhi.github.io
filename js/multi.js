function IsPC(){var a={};var b=navigator.platform;a.win=b.indexOf("Win")==0;a.mac=b.indexOf("Mac")==0;a.x11=(b=="X11")||(b.indexOf("Linux")==0);if(a.win||a.mac||a.xll){document.write("作者比较懒，没有做样式适配，请在手机端打开...")}}function imagePreview(k){var b=k.files;var j=document.getElementById("yg_multi");var d=$(".choosedImg div").length;if(b.length+d>9){$("textarea").val("您选的图片大于9张，请重新选择");return false}for(var f=0;f