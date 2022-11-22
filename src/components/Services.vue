<script>
export default{
    name:'Services'
}
</script>

<template>
    <div class="services">
  <div class="partners">
    <div class="container d-flex">
        <div class="partner_img"><img src="../assets/img/client-1-1.png" alt=""></div>
        <div class="partner_img"><img src="../assets/img/clienty-2.png" alt=""></div>
        <div class="partner_img"><img src="../assets/img/clienty-4.png" alt=""></div>
        <div class="partner_img"><img src="../assets/img/client-5.png" alt=""></div>
        <div class="partner_img"><img src="../assets/img/clienty-3.png" alt=""></div>
    </div>
  </div>
  <div class="container_pink">
     <div class="offer">
         <h3>We Offer Awesome Services</h3>
         <p>When, while lovely valley teems with vapour around meand meridian sun strikes the upper surface.</p>
     </div>
     <div class="offer_button">
         <div class="email">
            <span>Enter Your Email Address</span>
            <button class="button_blue">Subscribe</button>
         </div>
     </div>
  </div>
   </div>
</template>

<style lang="scss">
    .services{
        position:relative;
    }
    
    .partners{
        margin-bottom: 5rem;
        .d-flex{
            display: flex;
            justify-content: space-between;
            align-items: center;
            img{
                width: 120px;
            }
        }
    }
   

    .container_pink{
        width: 80%;
        margin: auto;
        background-image: linear-gradient(to right, #b6246e, #f9636b);
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding:3rem 2rem;
          border: 0;
          border-radius: 1rem;
          position: absolute;
          left: 10%;
          bottom: -280%;
          
          h3{
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }
          p{
            font-size: 0.6rem;
          }
          .offer_button{
            background-color: white;
            border: 0;
            border-radius: 2rem;
            padding: 0.3rem;
            span{
                color: #b3b3b3;
                font-size:0.75rem;
                margin-left: 0.5rem;
            
            }
            button{
                margin-left: 5rem;
            }
            
          }
    }


</style>