<script>
export default{
    name: 'BusinessStrategy'
}
</script>

<template>
<div class="background">
    <div class="container">
        <div class="row">    
            <div class="col-6"><img src="../assets/img/men-data.png" alt=""></div>
            <div class="col-6"> 
                <span>Start Your Project</span>
                <h2 class="strong">Grow Your Business</h2>
                <h2>With Our Strategy</h2>
                <p>When, while the lovely valley teems with vapour around meand the <br> meridian sun strikes the upper surface, of the impenetrable foliage of <br> my trees, and but a few stray gleams steal into the inner sanctuary.</p>
                <div>
                     <button class="button_pink"> Try It Now</button> 
                     <button class="button_blue">Explore More</button>
                </div>
            </div>
       </div>     
    </div>
</div>
</template>

<style lang="scss">
.background{
    background-image: linear-gradient( #0a1852 , #010130);
    
    .container{
       width: 80%;
       margin: auto;
       padding: 5rem 0;
       color: white;

       img{
          height: 25rem;
       }

       span{
        font-size: 0.75rem;

       }

       h2{
        font-weight: 400;
        font-size: 2.5rem;
        margin-top: 1rem;
       }

       .strong{
        font-weight: 600;
       }

       p{
        margin: 2rem 0;
        color: #03a7d3e6;
       }


    }

}
</style>