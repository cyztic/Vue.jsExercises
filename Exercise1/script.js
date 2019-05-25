new Vue({
    el: '#exercise',
    data: {
        name: "Josh",
        age: "25",
        title: "hi",
        image: 'https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg'
    },
    methods:{
        random: function() {
            return Math.random().toFixed(3);
            },

        changeTitle: function(event) {
                this.title = event.target.value;
            }
    }
})

function random(){
    return Math.random(0,1);
}