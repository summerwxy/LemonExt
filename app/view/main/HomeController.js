Ext.define('Lemon.view.main.HomeController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main-home',

    routes: {
        'home': 'onHome',
        'signin': 'onSignin',
    },

    onHome: function() {
        console.log('i am home');
    },

    onSignin: function() {
        console.log('i am signin');
    },


});
