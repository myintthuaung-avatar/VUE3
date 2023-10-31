<style lang="postcss" scoped>
.h1 {
  margin: 300px auto;
  text-align: center;
  color: #000000;
  transition: 0.5s;
  font-size: 8em;
  font-family: Arial, Helvetica, sans-serif;
}

.h1:hover {
  text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc,
      0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc,
      0 7px 0 #ccc, 0 8px 0 #ccc,
      0 9px 0 #ccc, 0 10px 0 #ccc,
      0 11px 0 #ccc, 0 12px 0 #ccc,
      0 20px 30px rgba(0, 0, 0, 0.5);
}
</style>
<template>
  <!-- <div> -->
  <v-app-bar
  scroll-behavior="fade-image"
  image="https://picsum.photos/1920/1080?random" 
  style="background-color: whitesmoke;"
></v-app-bar>
<!-- </div> -->
  </template>
  
  <script>
//import VideoBackground from 'vue-responsive-video-background-player'
//import '@cloudgeek/vue3-video-player/dist/vue3-video-player.css'
  export default {
    name: 'HelloWorld',
    components:{
         //VideoBackground
    },
    data: () => ({
        sticky: false,
        drawer: false,
        value: 1,
        menu1:0,
        active: true,
      group: null,
      udata:[],
        options: {
        minScrollbarLength: 100,
        items:[
            "aa","bb"
        ],
        Item:[
            "What is Apple TV+?","How can I watch it?","What does it cost?","Can I share with my family?","Are there commercials? And can I watch on demand?",
            "Do I need an Apple TV 4K?"
        ]
        
      },
      watcher: true
    }),
    
    methods:{
        
        changeOptions () {
      this.options.minScrollbarLength = this.options.minScrollbarLength + 0
    },
    onScroll(e) {
      if (typeof window === "undefined") return;
      const top = window.pageYOffset || e.target.scrollTop || 0;
      this.fab = top > 10;
    },
    toTop() {
      this.$vuetify.goTo(0);
    },
    Logout() {
      this.$router.push({
        name: "Login",
      });
    },
    },
    watch: {
      group () {
        this.drawer = false
      },
    }
  }
  
  </script>
  