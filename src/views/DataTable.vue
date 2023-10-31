<template>
    <div>
        <MainDrawer/>
        <v-col cols="12" md="12">
          <Vue3EasyDataTable
          :headers="Header"
          :items="Item" 
         
          :theme-color="themeColor"
          buttons-pagination
          loading>   
          <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
            <button :disabled="isFirstPage" @click="prevPage">prev page</button>
            <button :disabled="isLastPage" @click="nextPage">next page</button>
          </template>
          </Vue3EasyDataTable>
          
      </v-col>
</div>
  </template>
  <script>
    import MainDrawer from '@/components/Navigation/MainDrawer.vue';
    import Vue3EasyDataTable from 'vue3-easy-data-table';
    //import type { Header, Item } from "vue3-easy-data-table";
    import 'vue3-easy-data-table/dist/style.css';
   
  export default {
    data () {
      return {
        search: '',
        calories: '',
         themeColor : "#f48225",
         Header: [
      { text: "Name", value: "name" },
      { text: "Height (cm)", value: "height", sortable: true },
      { text: "Weight (kg)", value: "weight", sortable: true },
      { text: "Age", value: "age", sortable: true }
    ],

    Item: [
      { "name": "Curry", "height": 178, "weight": 77, "age": 20 },
      { "name": "James", "height": 180, "weight": 75, "age": 21 },
      { "name": "Jordan", "height": 181, "weight": 73, "age": 22 }
    ],

      }
    },
    components:{
        MainDrawer,Vue3EasyDataTable
    },
    computed: {
      headers () {
        return [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          {
            text: 'Calories',
            value: 'calories',
            filter: value => {
              if (!this.calories) return true

              return value < parseInt(this.calories)
            },
          },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ]
      },
    },
    methods: {
      filterOnlyCapsText (value, search, item) {
        return value != null &&
          search != null &&
          typeof value === 'string' &&
          value.toString().toLocaleUpperCase().indexOf(search) !== -1
      },
    },
  }
</script>