<script>
    export default{
        name:'LatestPost'
    }
</script>

<template>
    <div class="container div_margin">
        <div class="latest_post_title">
            <span>Blog</span>
            <h3><span class="strong">Latest</span> Posts</h3>
            <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes <br> the upper surface .</p>
        </div>
        <div class="container_card">
            <div class="row">
                <div class="col-6 ">
                
                        <div class="card_content bg_image">
                              <div class="card_text">
                            <p class="date">April 21,2019 - by Paul</p>
                            <h4>Amazon gets CCI nod to acquire 49% stake in</h4>
                            <p>When, while the lovely valley teems with vapor around me, <br> and the meridian sun s...</p>
                        </div>
                        <div class="card_button">
                            <button>Read more</button>
                        </div>                          
                        </div>  
                      
                                      
                </div>
                <div class="col-3">
                    <div class="card_content_blue bg_gradient">
                        <p class="date">April 21,2019 - by Paul</p>
                        <h4>Clearing Corporations get <br> SEBI not to invest in <br> overnight funds</h4>
                        <p>When, while the lovely valley teems <br> with vapor around me, and the <br> meridian sun s...</p>
                        <button>Read More</button>
                    </div>
                   
                </div>
                <div class="col-3">
                    <div class="card_content_blue bg_gradient">
                        <p class="date">April 21,2019 - by Paul</p>
                        <h4>Clearing Corporations get <br> SEBI not to invest in <br> overnight funds</h4>
                        <p>When, while the lovely valley teems <br> with vapor around me, and the <br> meridian sun s...</p>
                        <button>Read More</button>
                    </div>
                   
                </div>
                
            </div>
        </div>
    </div>
</template>

<style lang="scss">
   .div_margin{
     margin-top: 320px;
     .latest_post_title{
        text-align: center;
        margin-bottom: 3rem;
        span{
            color: #f9636b;
            font-size: 0.75rem;
        }
        h3{
            font-size: 2rem;
            font-weight: 400;
            margin: 1rem 0;
            .strong{
                font-size: 2rem;
                font-weight: 600;
                color: black;
            }
        }
     }
   }


    .container_card{
        .row{
           
            .col-3, .col-6> .card_content, .card_content_blue{
               height: 300px;
            }

            
            .bg_image{
           background-image: url(../assets/img/headway-537308-unsplash-1380x703.jpg);
           background-size: cover;
           
       } 
      .card_content{
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        color: white;
        padding: 0 2rem 2rem 2rem;
        border-radius: 1rem;
       

        .date{
            font-size: 0.75rem;
        }
        h4{
            font-size: 0.75rem;
            font-weight: 800;
            margin: 1rem 0; 
        }
        p{
            font-size: 0.75rem;
        }
        button{
            background-color: white;
            color: black;
            border:0;
            border-radius: 2rem;

        }
      }

      .bg_gradient{
        background: linear-gradient(to bottom right, #010130 0%, #162d6a 100%);
        border: 0;
        border-radius: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .card_content_blue{
        color: white;
        padding: 2rem 2rem;
        .date{
            font-size: 0.75rem;
        }
        h4{
            font-size: 0.75rem;
            font-weight: 800;
            margin: 1rem 0; 
        }
        p{
            font-size: 0.75rem;
            
        }
        button{
            background-color: white;
            margin-top: 1rem;
            color: black;
            border:0;
            border-radius: 2rem;
            width: 70%;
          }
    }
   }
 }
</style>