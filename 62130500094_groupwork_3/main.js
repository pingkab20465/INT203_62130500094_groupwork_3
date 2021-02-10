const app = {
    data() {
        return { 
            pics: [
                ['./images/fox.jpg', 'Fox', false]
                ,['./images/cloud.jpg', 'Cloud', false]
                ,['./images/bird.jpg', 'Bird', false]
                // ,['./images/others/man.jpg', 'Man', false]
                // ,['./images/others/forest.jpg', 'Forest', false]
                // ,['./images/others/reeds.jpg', 'Reeds', false]
            ]
        }
    },
    computed: {
        countPics() {
            return this.pics.length;
        },
        totalLikes() {
            return this.pics.filter(i => i[2]).length
        }
    },
    methods: {
        toggleLike(pic) {
            //console.log(pic);
            pic[2]= !pic[2];
        }
    }

}
mountedApp = Vue.createApp(app).mount('#app');