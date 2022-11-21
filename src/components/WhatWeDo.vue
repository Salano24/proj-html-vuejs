<script>
export default {
        name: "WhatWeDo"
      
    }
</script>

<template>
<div class="WhatWeDo_title">
    <span class="service">Our Services</span>
    <h2><span class="strong">What</span> We Do</h2>
    <p>When, while the lovely valley teems with vapour around meand the</p>
</div>
<div class="WhatWeDo_column">
    <div class="container">
        <div class="row">
            <div class="col-3">
        <img src="../assets/img/Group-247.png" alt="">
        <h3>Data Analyst</h3>
        <p>When, while the lovely valley <br> teems with vapour around <br> meand the meridian sun strikes <br> the upper</p>
    </div>
    <div class="col-3">
        <img src="../assets/img/Group-567.png" alt="">
        <h3>SEO Optimization</h3>
        <p>When, while the lovely valley <br> teems with vapour around <br> meand the meridian sun strikes <br> the upper</p>
    </div>
    <div class="col-3">
        <img src="../assets/img/Group-538.png" alt="">
        <h3>Security Data</h3>
        <p>When, while the lovely valley <br> teems with vapour around <br> meand the meridian sun strikes <br> the upper</p>
    </div>
    <div class="col-3">
        <img src="../assets/img/Group-566.png" alt="">
        <h3>Branding Strategy</h3>
        <p>When, while the lovely valley <br> teems with vapour around <br> meand the meridian sun strikes <br> the upper</p>
    </div>
        </div>
    </div>
  
    
</div>
<div class="WhatWeDo_button">
    <button class="button_pink">View All Services</button>
</div>
</template>

<style lang="scss">
.WhatWeDo_title{
  text-align: center;
  margin-top: 5rem;
     .service{
        color: #f9636b;
        font-size: 0.8rem;
     }

     h2{
        font-size: 2.5rem;
        margin: 1rem 0;
        font-weight: 400;
        .strong{
            font-weight: 600;
        }
     }

     p{
        font-size: 0.8rem;

     }

}

.WhatWeDo_column{
    text-align: center;
    margin-top: 8rem;
    margin-bottom: 8rem;

    img{
        height: 6rem;
        margin-bottom: 3rem;
    }

    h3{
        font-weight:800;
        font-size: 1rem;
        margin-bottom: 2rem;
    }
    p{
        color: #616161;
        line-height: 1.3rem;
    }

    
}

.WhatWeDo_button{
    display: flex;
    justify-content: center;
    margin-bottom: 5rem;

    button{
        box-shadow:0px 0px 50px #f9636b;
    }
}

</style>