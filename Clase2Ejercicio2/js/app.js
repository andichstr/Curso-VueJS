var App = new Vue({
    el: "#app",
    data: {
        valorInicial1: "Andres",
        valorInicial2: "Schuster",
    },
    methods: {
        actualizarValor1(e){
            this.valorInicial1 = e.target.value;
        },
    },
})