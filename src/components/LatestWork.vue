<script>
export default{
    name: 'LatestWork'
}
</script>

<template>
<div class="container">
    <span class="portfolio">Portfolio</span>
    <div class="work">
        <div class="work_text">
            <h3><span class="strong">latest</span> work</h3>
        </div>
        <div class="work_arrow">
            <span>🠄</span>
            <span>🠆</span>
        </div>
    </div>
</div>

<div class="carousuel">
    <div class="card cut_left">
        <img src="../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg" alt="">
        <div class="carosuel_text">
        <h6>Mock-up</h6>
        <span>Digital Experience</span>
        </div>
    </div>

    <div class="card mid_left">
        <img src="../assets/img/8wa60okr-1-790x576.jpg" alt="">
        <div class="carosuel_text">
        <h6>Basket of Flower on table</h6>
        <span>Branding Strategy</span>
        </div>
    </div>

    <div class="card center">
        <img src="../assets/img/DRY-1-790x576.jpg" alt="">
        <div class="carosuel_text">
        <h6>Purinky Products</h6>
        <span>Digital experience</span>
        </div>
    </div>

    <div class="card mid_right">
        <img src="../assets/img/a247b00b-3621-470f-b4b8-b3ac46f25907-1-790x576.jpg" alt="">
        <div class="carosuel_text">
        <h6>Satisfy Poster</h6>
        <span>Branding Strategy</span>
        </div>
    </div>

    <div class="card cut_right">
        <img src="../assets/img/84316050-0af0-49db-a53a-241d47ddad0e-2-790x576.jpg" alt="">
        <div class="carosuel_text">
        <h6>Mock-up</h6>
        <span>Digital Experience</span> 
        </div>   
    </div>

    </div>
    <div class="dot">
        <div class="active"></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
</template>

<style lang="scss">
   .container{
    padding-top: 5rem;
       
    .portfolio{
        font-size: 0.75rem;
        color: #f9636b;
    }

    .work{
        display: flex;
        justify-content: space-between;
        padding-bottom: 3rem;
        padding-top: 0.5rem;

        .work_text{
            font-size: 1.5rem;
           h3{
            font-weight: 300;
           

           span{
            font-weight: 700;
           }
           }
        }

        .work_arrow{
            color: #f9636b;
            span{
                border: 1px solid #f9636b;
                border-radius: 50%;
                padding: 0.3rem 0.4rem;
                font-size: 1.2rem;
                margin-left: 1.5rem;

            }
        }
        
    }

   } 
   .cut_left{
            position: absolute;
            left: -8%;
        }

   .cut_right{
            position: absolute;
            right: -8%;
        }
        
        .mid_left{
            position: absolute;
            left: 16%;
        }

        .mid_right{
            position: absolute;
            right: 16%;
        }

        .center{
            position: absolute;
            right: 40%;
        }

   .carousuel{
    display: flex;
    justify-content: space-between;
    position: relative;
    .card{
     height: 220px;
     width: 20%;
     border-radius: 1rem;
     box-shadow:0px 0px 15px #8d8b8b;
     margin-bottom: 3rem;
         
       
         
       .carosuel_text{
        display: flex;
        justify-content: space-between;
        align-items: center;

        h6{
            font-weight: 700;
            font-size: 0.8rem;
            padding: 1rem 0.5rem;
        }

        span{
            font-size: 0.6rem;
            padding: 1rem 0.5rem;
            color: #aaaaaa;

        }
       }

        img{
        height: 170px;
        width: 100%;
        border-radius: 1rem;
    }
    }
    
   }

   .dot{
    display: flex;
    justify-content: space-around;
    width: 10%;
    margin: auto;
    margin-bottom:3rem ;
    margin-top: 280px;
      div{
        height: 10px;
        width: 10px;
        background-color: #e5e5ea;
        border: 0;
        border-radius: 50%;
      }
    
    .active{
        background: linear-gradient(to bottom right, #b6246e 0%, #f9636b 100%);
    }
   }
</style>