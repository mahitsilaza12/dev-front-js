<template>
    <div>
        <AppNav /> 
        <TruckTable :trucks="trucks"/>
    </div>
</template>

<script>
import TruckTable from '../components/Truck/TruckTList'
import AppNav from '../components/Nav/AppNav'
import { mapActions, mapState } from 'vuex'

export default {
    name: "TruckFeature",
    components : {
        TruckTable, AppNav
    },
    computed: {
        ...mapState('truck', ['trucks'])
    },
    methods: {
        ...mapActions('truck', ['fetchTrucks'])
    },
    mounted() {
        this.fetchTrucks()
    }
}
</script>
