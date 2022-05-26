$(function(){
	
	var input_min = 0;
	var input_sec = 0;
	var frame = 0;
	
	var sec_all = 0;
	var rt_h = 0;
	var rt_m = 0;
	var rt_s = 0;
	
	document.getElementById("OK_button").onclick = function() {
		input_min = parseInt($('#input_num_min').val());
		input_sec = parseInt($('#input_num_sec').val());
		frame = parseInt($('#input_num_frame').val());
		
		sec_all = ((input_min*60) + input_sec) * frame;
		
		if(sec_all < 3600){
			
			rt_h = 0;
			rt_m = Math.floor(sec_all % 3600 / 60);
			rt_s = sec_all % 60;
			
		}else{
			
			rt_h = Math.floor(sec_all / 3600);
			rt_m = Math.floor(sec_all % 3600 / 60);
			rt_s = sec_all % 60;
			
		}
		
		$("#result").text(`RenderTime: ${rt_h}h ${rt_m}m ${rt_s}s`);
		
		
	}
});