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
				contentScript: "document.body.style.backgroundColor = '#272822';",
	    		contentScriptFile: [data.url("jquery.js"), data.url("parse.js")]
	  		});
	  	}
	  	if(tab.url.endsWith(".css")) {
	  		tab.attach({
	  			// Do CSS parser.
	  		});
	  	}
  	}
});