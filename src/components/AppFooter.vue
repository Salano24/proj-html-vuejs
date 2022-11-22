<script>
import { FooterLink } from '../state.js'
export default {
        name: "AppFooter",
        data() {
            return{
                FooterLink
            }
        },
      
    }
</script>

<template>
<div class="background_blue">
    <div class="container">
        <div class="row">
            <div class="col-3">
                <img src="../assets/img/white-logo-2.png" alt="">
                <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes the upper impenetrable</p>
                   
            </div>
            <div v-for="link in FooterLink.links" class="col-3">
               <h3>{{link.name}}</h3>
               <div class="links">
                   <span class="footer_link">{{link.page1}}</span><br>
               <span class="footer_link">{{link.page2}}</span><br>
               <span class="footer_link">{{link.page3}}</span><br>
               <span class="footer_link">{{link.page4}}</span><br>
               <span class="footer_link">{{link.page5}}</span>
               </div>
            
            </div>
           
        </div>
    </div>
    <div class="border"></div>
    <div class="credits">
        <div class="copyright">
            <p>&copy; 2020 Phlox. All Rights Reserved.</p>
        </div>
        <div class="social">
            <font-awesome-icon class="icon" icon="fa-brands fa-instagram" />
            <font-awesome-icon class="icon" icon="fa-brands fa-linkedin-in" />
            <font-awesome-icon class="icon" icon="fa-brands fa-facebook-f" />
            <font-awesome-icon class="icon" icon="fa-brands fa-twitter" />
        </div>
    </div>
    <div class="message">
        <span>&#8593;</span>
        <font-awesome-icon class='message_icon' icon="fa-solid fa-comment" />
    </div>
</div>
</template>

<style lang="scss">
  .background_blue{
    background-image: linear-gradient( #0a1852 , #010130);
    color: white;
    padding-top: 8rem;
    margin-top: 9rem;  
    position: relative; 
    z-index: -1;
    .container{

     .links{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
      
     }
    img{
        height: 3rem;
        margin-bottom: 3rem;
    }
    p{
        font-size: 0.75rem;
        line-height: 1rem;
        color: #7e808d;
       
    }
    h3{
        margin-bottom: 0.5rem;
    }
    .footer_link{
        color: #7e808d;
        font-size: 0.75rem;
    }
    
 }
.border{
    border-top: 1px solid #7e808d;
    margin-top: 3rem;
}
 .credits{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 0;
    p{
        color: #7e808d;
        font-size: 0.75rem;
    }
    .social{
        width: 20%;
        display: flex;
        justify-content: space-between;
        .icon{
            font-size: 1.2rem;
        }
    }
    
 }


 .message{
    position: absolute;
    right: 1%;
    color: white;
    bottom: 3%;
    .message_icon{
        background-color: #527ceb;
        padding: 1rem;
        border: 0;
        border-radius: 50%;
        font-size: 1.2rem;

    }
    span{
        position: absolute;
        left: -95%;
        top: -35%;
        background-color: white;
        color: black;
        padding: 4% 18%;
        font-size: 1.4rem;
        border: 0;
        border-radius: 50%;
    }

 }
 

  }
</style>