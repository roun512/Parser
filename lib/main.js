// require("sdk/tabs").on("ready", logURL);
 
// var pageMod = require("sdk/page-mod");

// function logURL(tab) {
// 	if(tab.url.endsWith(".js")) {
// 		console.log(tab.url);
// 		pageMod.PageMod({
// 			contentScriptFile: "./parse.js"
// 		});
// 	}
// }

var tabs = require("sdk/tabs");
var data = require("sdk/self").data;

tabs.on('ready', function(tab) {
	if(tab.url.endsWith(".js")) {
		var { getTabForId, getTabContentWindow } = require ("sdk/tabs/utils");
		var tab = require("sdk/tabs").activeTab;
		var window = getTabContentWindow (getTabForId(tab.id));
		var content = window.document.body.innerHTML;
		if(tab.url.endsWith(".js")) {
			tab.attach({
				
				// content = content.replace(/(function)/g, 'test');
				// if(content.contains("function")) {
					// var word = content.match("function\s+(\S+)\(");
				// contentScript: ["document.body.style.backgroundColor = 'black';", "document.body.style.color = 'green';", "document.body.innerHTML = document.body.innerHTML.replace(/(function)/g, 'test').replace(/\s(.*)\(/g, 'BLABLALBA');"]
	    		contentScript: "document.body.style.backgroundColor = '#272822';",
	    		contentScriptFile: [data.url("jquery.js"), data.url("parse.js")]
	  		});
	  	}
  	}
});