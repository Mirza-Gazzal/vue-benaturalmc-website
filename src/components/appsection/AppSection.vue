<template>
    <div>
        <!-- App Section -->
        <section class="app-section">
            <div class="outer-box">
                <div class="auto-container">
                    <div class="row" v-for="(info,key) in mobileInfo">
                        <!-- Title Column -->
                        <div class="title-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <h1 v-html="info.title"></h1>
                            </div>
                        </div>

                        <!-- Image Column -->
                        <div class="image-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="image-box wow zoomInLeft">
                                    <figure class="image"><img :src="info.imageURL" alt=""></figure>
                                </div>
                            </div>
                        </div>

                        <!-- Content Column -->
                        <div class="content-column col-lg-4 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <h3 v-html="info.subTitle"></h3>
                                <div class="text" v-html="info.text"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End App Section -->
    </div>
</template>
<script>
    export  default {
        props:{
        mobileInfo: {
            required: true
        }
        }
    }
</script>