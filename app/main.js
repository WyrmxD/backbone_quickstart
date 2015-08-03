require(['jquery', 'underscore', 'backbone', 'localstorage'], 
	function ($, _, Backbone, localstorage) {   
	"use strict"

	var SomeModel = Backbone.Model.extend({
        localStorage: new Backbone.LocalStorage("SomeModel"),
        defaults: {
        	title: "example"
        }
    });

    var mod = new SomeModel();
    mod.save();

});