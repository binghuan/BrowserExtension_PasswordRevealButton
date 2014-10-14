
var data       = require('sdk/self').data;
var winUtils   = require('sdk/window/utils');
var windows    = require('sdk/windows');
var Request    = require('sdk/request').Request;
var xhrRequest = require('sdk/net/xhr');
var tabs       = require('sdk/tabs');
var pageMod    = require("sdk/page-mod");
var _		   = require("sdk/l10n").get;
var system     = require("sdk/system");
var system     = require("sdk/system");
var panel      = require("sdk/panel").Panel;
//Cu.import('resource://gre/modules/Services.jsm');

var contentScript = pageMod.PageMod({
	include : "*",
	attachTo: ["existing", "frame", "top"],
	contentScriptFile: [
		data.url("lib/jquery-1.11.1.min.js"),
		data.url("content_script.js")
		],
	contentScriptWhen: "end",
	onAttach : function(worker){
	}
});
