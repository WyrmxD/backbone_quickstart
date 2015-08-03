require.config({
	baseUrl: 'node_modules',
	paths: {
        app: '../app',
        jquery: 'jquery/dist/jquery.min',
        backbone: 'backbone/backbone-min',
        underscore: 'underscore/underscore-min',
        localstorage: 'backbone.localstorage/backbone.localStorage-min'
    },
	shim: {
		underscore: {
			exports: '_'
		},
		backbone: {
			deps: ["underscore", "jquery"],
			exports: "Backbone"
		}
	}
});

requirejs(['app/main']);