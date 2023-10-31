
<template>
    <div>
        <MainDrawer/>
        <!-- <v-container> -->
        <v-col cols="12" md="12">
            
            <v-row dense>
                <v-col cols="12" md="4" sm="12">
                    <v-card>
                        <GoogleChart />
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                        <LineChart />
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <DoneChart/>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <ComboChart/>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <MapChart/>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card>
                        <ColumnChart/>
                    </v-card>
                </v-col>
                <v-col cols="12" md="4">
                    <v-card >
                        <ColumnChart/>
                    </v-card>
                </v-col>
            </v-row>
        </v-col>
    <!-- </v-container> -->
    </div>
</template>
<script>
import GoogleChart from '@/Services/PieChart.js';
import LineChart from '@/Services/LineChart.js';
import DoneChart from '@/Services/DonetChart.js';
import ComboChart from '@/Services/ComboChart.js';
import MapChart from '@/Services/MapChart.js';
import ColumnChart from '@/Services/ColumnChart.js';
import MainDrawer from '@/components/Navigation/MainDrawer.vue';
export default {
  name: 'HelloWorld',
  components:{
    GoogleChart,LineChart,DoneChart,ComboChart,MapChart,ColumnChart,MainDrawer
    },
  data: () => ({
  }),
    
created() {
    this.$emit("eventname", true);
},
}
</script>
