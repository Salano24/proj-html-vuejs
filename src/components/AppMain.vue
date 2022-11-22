<script>
import WhatWeDo from '../components/WhatWeDo.vue'
import BusinessStrategy from '../components/BusinessStrategy.vue'
import LatestWork from '../components/LatestWork.vue'        
import OurPricing from '../components/OurPricing.vue'
import LatestPost from '../components/LatestPost.vue'
import PeopleSay from "../components/PeopleSay.vue";
import Services from '../components/Services.vue'

export default {
        name: "AppMain",
        components: {
           WhatWeDo,
           BusinessStrategy,
           LatestWork,
           OurPricing,
           LatestPost,
           PeopleSay,
           Services

        }
      
    }
</script>

<template>
   <WhatWeDo />
   <BusinessStrategy />
   <LatestWork />
   <OurPricing />
   <LatestPost />
   <PeopleSay />
   <Services />
</template>

<style>

</style>