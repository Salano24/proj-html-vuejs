<script>
import WhatWeDo from '../components/WhatWeDo.vue'
import BusinessStrategy from '../components/BusinessStrategy.vue'
import LatestWork from '../components/LatestWork.vue'        
import OurPricing from '../components/OurPricing.vue'




export default {
        name: "AppMain",
        components: {
           WhatWeDo,
           BusinessStrategy,
           LatestWork,
           OurPricing,

        }
      
    }
</script>

<template>
   <WhatWeDo />
   <BusinessStrategy />
   <LatestWork />
   <OurPricing />
</template>

<style>

</style>