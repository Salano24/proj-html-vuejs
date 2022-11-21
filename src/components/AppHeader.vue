<script>
import { HeaderLink } from '../state.js';

export default {

        name: "AppHeader",
        data() {
            return{
                HeaderLink
            }
        },
      
    }
</script>

<template>
<header>
    <nav class="nav">
        <div class="header_img">
            <img src="../assets/img/white-logo-2.png" alt="">
        </div>
        <div class="header_links">
           <span v-for="link in HeaderLink.links"><span :class="link.class">{{link.text}}</span></span>
           <button class="button_blue" >Sign In</button>
        </div>
    </nav>
    <div class="jumbo">
        <div class="jumbo_text">
            <h2 class="strong_title">Business Planning</h2>
            <h2 class="faint_title">Digital Tecnology</h2>
            <h2 class="strong_title">Modern Solution !</h2>

            <p>When, while the lovely valley teems with vapour around <br> meand the meridian sun strikes the upper surface.</p>
            <button class="button_pink"> Try It Now </button>
            <button class="button_blue"> Explore More </button>
        </div>
        <div class="jumbo_img"><img src="../assets/img/header.png" alt=""></div>
    </div>
</header>
</template>

<style lang="scss">

 header{
    background-image: linear-gradient( #0a1852 , #010130);
    color: white;
    padding-top: 1rem;


    nav{
       display: flex; 
       justify-content: space-between;
       align-items: center;
       width: 80%;
       margin: auto;

       .active{
        color: #f9636b;
       }

       span{
        margin-right: 1.2rem;
        font-size: 0.75rem;

       }

       img{
        height: 2rem;
       }
    }

    .jumbo{
       display: flex;
       width: 80%;
       margin: auto;

       .jumbo_text{
        padding-top: 8rem;
        

        .strong_title{
            font-weight: 600;
            font-size:3rem;
        }
        .faint_title{
            font-weight: 400;
            font-size: 3rem;
        }

        p{
            margin: 3rem 0;
            color: #03a7d3e6;
        }

       }

       .jumbo_text, .jumbo_img{
        width: 50%;
        margin-top: 2rem;
        padding-bottom: 8rem;
       }

       img{
        height: 30rem;
       }
    }
 }

</style>