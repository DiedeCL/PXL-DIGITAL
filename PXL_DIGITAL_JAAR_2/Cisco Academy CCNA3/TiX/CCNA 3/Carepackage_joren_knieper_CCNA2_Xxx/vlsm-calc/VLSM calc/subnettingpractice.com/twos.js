function next_question(){var g=parseInt(document.getElementById("from").value);var f=parseInt(document.getElementById("to").value);var e=parseInt(document.getElementById("base").value);var d=Math.floor(Math.random()*(f-g+1))+g;var c=Math.pow(e,d);if(Math.floor(Math.random()*2+1)==2){var a="<b>What is the value of "+e+"<sup>"+d+"</sup>?</b>";var b=c}else{var a="<b>"+e+" to what exponent is equal to "+c+"?</b>";var b=d}document.getElementById("question").innerHTML=a;document.getElementById("answer").innerHTML=b;document.getElementById("answer").style.display="none";document.getElementById("answeris").style.display="none";document.getElementById("answeris").innerHTML="The correct answer is:";document.getElementById("input").value=""}next_question();function check_answer(){var a=document.getElementById("input").value;var b=document.getElementById("answer").innerHTML;a=a.replace(/^\s+|\s+$/g,"");b=b.replace(/^\s+|\s+$/g,"");if(a==b){document.getElementById("answeris").innerHTML="<b>Yes!</b> The correct answer is:";document.getElementById("answeris").style.display="block";document.getElementById("answer").style.display="block"}else{document.getElementById("answeris").innerHTML="<b>That is not correct.</b>";document.getElementById("answeris").style.display="block"}}function show_answer(){document.getElementById("answeris").innerHTML="The correct answer is:";document.getElementById("answeris").style.display="block";document.getElementById("answer").style.display="block"};