<script>
export default{
   
    name:  'OurPricing'
}
</script>

<template>
<div class="background background_pricing">
    <div class="our_pricing_title">
        <span class="price_list">
            Price List
        </span>
        <h3>Our Pricing</h3>
        <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes <br> the upper surface .</p>
    </div>   
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <div class="card">
                        <span class="background_number">
                        40
                        </span> 
                        <div class="card_text">
                            <h4 >Designing</h4>
                            <span class="secondary_title">PROCESS</span>
                            <h2 class="month_number">40</h2>
                            <span class="strong month">Per Month</span>
                            <p class="card_p first_p"><span class="strong">Creative</span> Design Enabled</p>
                            <p class="card_p"><span class="strong">Vibrant</span> Color usage</p>
                            <p class="card_p"><span class="strong">Eye</span> Catching Design</p>
                            <p class="card_p"><span class="strong">Extreme</span> Typography</p>
                            <p class="card_p"><span class="strong">Exceptional</span> Design</p>
                            <div class="button_pink">
                                <span class="order">Order Now</span><span class="order arrow">🠆</span>
                            </div>
                        </div>
                    </div>
                </div>    
                <div class="col-3">
                    <div class="card">
                        <span class="background_number">
                        60
                        </span> 
                        <div class="card_text">
                            <h4 >Developing</h4>
                            <span class="secondary_title">PRODUCT</span>
                            <h2 class="month_number">60</h2>
                            <span class="strong month">Per Month</span>
                            <p class="card_p first_p"><span class="strong">Creative</span> Design Enabled</p>
                            <p class="card_p"><span class="strong">Vibrant</span> Color usage</p>
                            <p class="card_p"><span class="strong">Eye</span> Catching Design</p>
                            <p class="card_p"><span class="strong">Extreme</span> Typography</p>
                            <p class="card_p"><span class="strong">Exceptional</span> Design</p>
                            <div class="button_pink">
                                <span class="order">Order Now</span><span class="order arrow">🠆</span>
                            </div>
                        </div>
                    </div>
                </div> 
                <div class="col-3">
                    <div class="card">
                        <span class="background_number">
                        80
                        </span> 
                        <div class="card_text">
                            <h4 >Supporting</h4>
                            <span class="secondary_title">CLIENTS</span>
                            <h2 class="month_number">80</h2>
                            <span class="strong month">Per Month</span>
                            <p class="card_p first_p"><span class="strong">Creative</span> Design Enabled</p>
                            <p class="card_p"><span class="strong">Vibrant</span> Color usage</p>
                            <p class="card_p"><span class="strong">Eye</span> Catching Design</p>
                            <p class="card_p"><span class="strong">Extreme</span> Typography</p>
                            <p class="card_p"><span class="strong">Exceptional</span> Design</p>
                            <div class="button_pink">
                                <span class="order">Order Now</span><span class="order arrow">🠆</span>
                            </div>
                        </div>
                    </div>
                </div>        
            </div>
        </div>
    
</div>
</template>

<style lang="scss">
   .background_pricing{
    height: 480px;
    .row{
        justify-content: space-evenly;
    }
   }
   
   .our_pricing_title{
    text-align: center;
    color: white;

    padding-top: 3rem;
        .price_list{
            color: #f9636b;
            
        }

        h3{
            font-size: 2.5rem;
            margin: 1.5rem 0;
        }
   }

   
   .container{
        

     .card{
        position: relative;
        background-color: white;
        color: black;
        display: flex;
        text-align: center;
        justify-content: center;
        border: 0;
        border-radius: 1rem;
        padding: 2rem 0;
        z-index: 0;
         box-shadow:0px 0px 20px #6a6a6a;
 
        .background_number{
            position: absolute;
            top: -13%;
            right: -2%;
            z-index: -1;
            font-size: 10rem;
            color: #eaeaea;
            font-weight: 800;
        }
        h4{
         margin-bottom: 0.5rem;
         font-size: 1.5rem;
         font-weight: 800;
            }

         .secondary_title{
            font-weight: 800;
            font-size: 0.5rem;
        }
       
        .month_number{
            font-weight: 600;
            font-size: 3rem;
        }
         .month{
           font-size: 0.5rem;
          
             }
       
        .card_p{
            color: rgb(75, 75, 75);
            margin: 0.75rem 0;
            font-size: 0.75rem;
            .strong{
                font-size: 0.75rem;
                color: black;
            }
           
        }

        .first_p{
            margin-top: 2rem;
        }
       
        .order{
            color: white;
            font-weight: 600;
            font-size: 0.75rem;
        }
        .button_pink{
            border: 0;
            border-radius: 20px;
            padding: 0.3rem 1.5rem;
            margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow:0px 0px 30px #f9636b;
            .arrow{
                font-size: 1rem;
            }
        }
     }

     .card:hover{
        position: relative;
        background: linear-gradient(to bottom right, #b6246e 0%, #f9636b 100%);
        color: white;
        display: flex;
        text-align: center;
        justify-content: center;
        border: 0;
        border-radius: 1rem;
        padding: 2rem 0;
        z-index: 0;
         box-shadow:0px 0px 20px #6a6a6a;
 
        .background_number{
            position: absolute;
            top: -13%;
            right: -2%;
            z-index: -1;
            font-size: 10rem;
            color: #de5c7f;
            font-weight: 800;
        }
        h4{
         margin-bottom: 0.5rem;
         font-size: 1.5rem;
         font-weight: 800;
            }

         .secondary_title{
            font-weight: 800;
            font-size: 0.5rem;
        }
       
        .month_number{
            font-weight: 600;
            font-size: 3rem;
        }
         .month{
           font-size: 0.5rem;
          
             }
       
        .card_p{
            color: white;
            margin: 0.75rem 0;
            font-size: 0.75rem;
            .strong{
                font-size: 0.75rem;
                color: white;
            }
           
        }

        .first_p{
            margin-top: 2rem;
        }
       
        .order{
            color: #f9636b;
            font-weight: 600;
            font-size: 0.75rem;
        }
        .button_pink{
            background-color: white;
           background-image: none;
            border: 0;
            border-radius: 20px;
            padding: 0.3rem 1.5rem;
            margin-top: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: none;
            .arrow{
                font-size: 1rem;
            }
        }
     }
   }
</style>