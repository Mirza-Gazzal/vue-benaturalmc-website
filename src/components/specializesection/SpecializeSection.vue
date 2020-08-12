<template>
    <div>
        <!-- Specialize Section -->
        <section class="specialize-section-two">
            <div class="auto-container">
                <div class="row">
                    <!-- Title Column -->
                    <div class="title-column col-xl-5 col-lg-12 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="float-text">Services</span>
                                <h2>Our Specialization</h2>
                            </div>

                            <div class="text-box">
                                <h4>{{Title}}</h4>
                                <p>{{description1}}</p>
                                <p>{{description2}}</p>
                            </div>
                            <div class="link-box">
                                <a href="#">Read More <i class="fa fa-angle-double-right"></i></a>
                            </div>
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
        <!-- End Specialize Section -->
    </div>
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
                default: 'Line one for your description',
                required: false
            },
            description2: {
                default: "Line one for your description",
                required: false
            },
        }
    }
</script>