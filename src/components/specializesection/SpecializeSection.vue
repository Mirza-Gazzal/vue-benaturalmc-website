<template>
    <section id="our-center-section" class="specialize-section-two">
            <div class="auto-container">
                <div class="row">
                    <!-- Title Column -->
                    <div class="title-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="float-text">BE NATURAL</span>
                                <h2>Our Beauty Center</h2>
                            </div>

                            <div class="text-box">
                                <h4>{{Title}}</h4>
                                <p>{{description1}}</p>
                                <p>{{description2}}</p>
                            </div>
                            <!--<div class="link-box">
                                <a href="#">Read More <i class="fa fa-angle-double-right"></i></a>
                            </div>-->
                        </div>
                    </div>

                    <!-- Carousel Column -->
                    <div class="carousel-column col-xl-7 col-lg-12 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="carousel-outer" >
                                <ul class="image-carousel owl-carousel owl-theme">

                                    <li v-for="(picture,key) in SpecialGallery"><a :href="picture.imageURL" class="lightbox-image" title="Image Caption Here"><img :src="picture.imageURL" alt=""></a></li>

                                </ul>

                                <ul class="thumbs-carousel owl-carousel owl-theme" >
                                    <li class="thumb-box" v-for="(picture,key) in ThumbGallery">
                                        <figure><img :src="picture.imageURL" alt=""></figure>
                                        <div class="overlay"><span class="icon fa fa-arrows-alt"></span></div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
</template>
<script>
    export  default  {
        props : {
            SpecialGallery: {
              required: true,
            },
            ThumbGallery: {
                required: true,
            },
            Title: {
                required:false,
                default: "Example"
            },
            description1: {
                default: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..',
                required: false
            },
            description2: {
                default: "",
                required: false
            },
        }
    }
</script>
