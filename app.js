new Vue({
    el: '#container',
    data: {
        message: 'Mi primer programa en vue',
        red: 'background-color: red',
        blue: 'background-color: blue'
    },
    methods: {
        changeValue: function() {
          this.message = 'Mi primer programa en vue' == this.message ? 'He pulsado el boton!' : 'Mi primer programa en vue';
        },
        changeColor: function() {
            this.red = 'background-color: red' == this.red ? 'background-color: blue' : 'background-color: red';
        }
    }
});