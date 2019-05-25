new Vue({
    el: '#exercise',
    data: {
        value: "change me"
    },
    methods: {
        alertMe : function(){
            alert("ALERTTTTT");
        },
        entered: function(event) {
            this.value = event.target.value;
        }
    }
})