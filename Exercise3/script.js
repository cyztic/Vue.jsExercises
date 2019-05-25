new Vue({
    el: "#exercise",
    data: {
        value: 0    
    },
    computed: {
        result: function() {
            return this.value == 16 ? "equal to 16" : "not equal to 16";
        }
    },
    watch: {
        result: function() {
            var vm = this;
            setTimeout(function() {
                vm.value = 0;
            },5000);
        }
    },
    methods: {
        
    },
})