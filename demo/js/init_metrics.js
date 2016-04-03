(function(){

	var scripts = [
		{
			src: "//yastatic.net/share/share.js",
			async: true,
		},
		{
			src : "../../metrika.js",
			async: true,
		}
	],
	
	scripts_len = scripts.length;

	window.addEventListener('load', init);
	
	function init(){
	
		var script;
		
		for(var i = 0, scripts_len = scripts.length; i < scripts_len; i++){
		
			script = document.createElement("script");
			script.src = scripts[i].src;
			script.async = scripts[i].async;
			document.body.appendChild(script);
			
		}
			
	}
})();