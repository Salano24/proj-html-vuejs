<script>
export default{
    name:'PeopleSay'
}
</script>

<template>
     <div class="people_say_title">
            <span>Testimonial</span>
            <h3><span class="strong">What</span> People Say</h3>
            <p>When, while the lovely valley teems with vapour around meand the meridian sun strikes <br> the upper surface .</p>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img src="../assets/img/szabo-viktor-1266895-unsplash-1024x1024.png" alt="">
                    <div class="stars">
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />

                    </div>
                    <p>When, while the lovely valley teems with vapour around <br> meand the meridian sun strikes the upper impenetrable <br> foiage of my trees, and but a thousand.</p>
                    <h5>Michkel Angel</h5>
                    <h5 class="work_sector">Marketing Menagment</h5>
                </div>
                <div class="col-4">
                    <img src="../assets/img/philipe-cavalcante-539505-unsplash-1024x1024.png" alt="">
                    <div class="stars">
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />

                    </div>
                    <p>When, while the lovely valley teems with vapour around <br> meand the meridian sun strikes the upper impenetrable <br> foiage of my trees, and but a thousand.</p>
                    <h5>Michkel Angel</h5>
                    <h5 class="work_sector">Marketing Menagment</h5>
                </div>
                <div class="col-4">
                    <img src="../assets/img/fabio-spinelli-695744-unsplash-1024x1024.png" alt="">
                    <div class="stars">
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon class='pink' icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />
                        <font-awesome-icon icon="fa-solid fa-star" />

                    </div>
                    <p>When, while the lovely valley teems with vapour around <br> meand the meridian sun strikes the upper impenetrable <br> foiage of my trees, and but a thousand.</p>
                    <h5>Michkel Angel</h5>
                    <h5 class="work_sector">Marketing Menagment</h5>
                </div>
            </div>
        </div>
</template>

<style lang="scss">
      .people_say_title{
        text-align: center;
        margin: 3rem 0;
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

     .container{
         .row{
           
            .col-4{
                text-align: center;
                
                img{
                    max-width: 30%;
                    border: 5px solid #b6246e;
                    border-radius: 50%;
                    margin-bottom: 2rem;
                    
                }
                .stars{
                    margin-bottom: 2rem;
                    color: #dcdcdc;
                    .pink{
                       color: #b6246e;
                    }
                }
                p{
                    font-size: 0.8rem;
                    margin-bottom: 2rem;
                }

                h5{
                    font-weight: 800;
                    margin-bottom: 1rem;
                }

                .work_sector{
                    font-weight: 400;
                    margin-bottom: 5rem;
                
                }
            }
         }
     }
</style>