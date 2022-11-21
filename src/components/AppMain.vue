<script>
import WhatWeDo from '../components/WhatWeDo.vue'
import BusinessStrategy from '../components/BusinessStrategy.vue'
import LatestWork from '../components/LatestWork.vue'



export default {
        name: "AppMain",
        components: {
           WhatWeDo,
           BusinessStrategy,
           LatestWork,
        }
      
    }
</script>

<template>
   <WhatWeDo />
   <BusinessStrategy />
   <LatestWork />
</template>

<style>

</style>