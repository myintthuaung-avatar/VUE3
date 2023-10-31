<style scoped>
.router-link{
  text-decoration: none;
}
</style>
<template>
  <div >
    <MainAppBar/>
    <!-- <v-card> -->
      <!-- <v-layout> -->
        <v-navigation-drawer
        expand-on-hover
        rail
        style="background-color: whitesmoke;"
        >
          <v-list>
            <v-list-item
              prepend-avatar=""
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav v-model="model">
            <template v-for="item in items">
              <router-link v-if=item :key="item.id" :to="item.href" class="router-link">
            <v-list-item :prepend-icon=item.icon :title=item.title link :to=item.href :color=item.color></v-list-item>
            <!-- <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item> -->
            </router-link>
            </template>
          </v-list>
        </v-navigation-drawer>
        
        <!-- <v-main style="height: 250px"></v-main> -->
      <!-- </v-layout> -->
    <!-- </v-card> -->
  </div>
</template>

  <script>
  import MainAppBar from './MainAppBar.vue';
export default {
  name: "App",
  components:{
    MainAppBar
  },
  data () {
     return {
     //drawer: true,
     mini: true,
     drawer: null, // Hide mobile side menu by default
     items: [
      {id: 1, title:"Dashboard", href: "/dashboard", icon: "mdi-home", color:"#050505", children: [], 
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 2, title:"Business", href: "/datatable", icon: "mdi-database",color:"#050505", children: [],
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 3, title:"Admin", href: "/table", icon: "mdi-account-tie",color:"#050505", children: [], 
        permissions:['ADMIN', 'VIP', 'USER' ]},
    {id: 4, title:"Setting", href: "/userlist", icon: "mdi-decagram",color:"#050505", children: [], 
    permissions:['ADMIN', 'VIP', 'USER' ]},
     ],
     }
  },
  
}
</script>