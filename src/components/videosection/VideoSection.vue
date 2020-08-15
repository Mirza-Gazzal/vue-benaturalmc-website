<template>
    <div id="about-section">
        <section class="video-section" v-for="(info,key) in videoInfo">
            <div class="outer-box" :style="'background-image: url('+info.imageBackground+')'">
                <div class="auto-container">
                    <div class="row">
                        <div class="content-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="sec-title light">
                                    <span class="float-text">{{info.sectionTitle}}</span>
                                    <h2>{{info.sectionSubTitle}}</h2>
                                </div>
                                <span class="title">{{info.textTitle}}</span>
                                <div class="text">{{info.text}}</div>
                            </div>
                        </div>

                        <!-- Video Column -->
                        <div class="video-column col-lg-6 col-md-12 col-sm-12">
                            <div class="inner-column">
                                <div class="video-box">
                                    <figure class="image"><img :src="info.videoBackground" alt="">
                                        <a :href="info.link" class="link" data-fancybox="gallery" data-caption=""><span class="icon fa fa-play"></span></a>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    export  default {
        props: {
            videoInfo: {
                required: true
            }
        }
    }


</script>
