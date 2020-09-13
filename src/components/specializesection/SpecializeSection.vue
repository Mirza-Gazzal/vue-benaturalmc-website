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
                                    <li v-for="(picture,key) in SpecialGallery">
                                        <a :href="picture.imageURL" class="lightbox-image" title="Image Caption Here">
                                            <img v-lazy="picture.imageURL" alt="">
                                        </a>
                                    </li>
                                </ul>

                                <ul class="thumbs-carousel owl-carousel owl-theme" >
                                    <li class="thumb-box" v-for="(picture,key) in ThumbGallery">
                                        <figure>
                                            <img v-lazy="picture.imageURL" />
                                        </figure>
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
                default: ""
            },
            description1: {
                default: 'BE Natural Beauty Clinic is the premier beauty destination in Beirut district. We’re a team of highly trained beauty specialists - bringing you the best-of-the-best treatments and services with an amazing high tech wellness service.',
                required: false
            },
            description2: {
                default: "",
                required: false
            },
        }
    }
</script>
