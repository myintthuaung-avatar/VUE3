<template>
    <!-- <MainDrawer/> -->
    <v-app id="inspire">
        <MainDrawer/>
        
        <v-main class="mt-n6">
           
            <slot />
        </v-main>
    </v-app>
</template>
<script>
// import MainAppBar from '../navigation/MainAppBar.vue';
import MainDrawer from '@/components/Navigation/MainDrawer.vue';
export default {
    data() {
        return {
        }
    },
    components:{
       // MainAppBar,
        MainDrawer,
    }

}
</script>
