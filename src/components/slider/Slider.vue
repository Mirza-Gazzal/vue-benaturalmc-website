<template>
    <section class="banner-section-three">
        <div class="banner-carousel-two owl-carousel owl-theme">
            <!-- Slide Item -->
            <div class="slide-item" :style="'background-image: url(' + slide.imageUrl + ')'"
                 v-for="slide in slides">
                <div class="auto-container">
                    <div class="content-box clearfix">
                        <div class="inner-box">
                            <h4 class="title">{{slide.title}}</h4>
                            <h2>{{slide.subTitle}}</h2>
                            <div class="text">{{slide.text}}</div>
                            <div class="link-box">
                                <a :href="slide.link" v-if="slide.hasOwnProperty('link')">
                                    {{ slide.linkText || 'Read More'}}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div class="bottom-box">
                <div class="auto-container">
                    <div class="outer-box clearfix">
                        <ul class="social-links clearfix">
                            <li v-for="media in socialMedia">
                                <a :href="media.link">
                                    <span :class="media.class"></span>
                                    {{media.title}}
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props: {
            slides: {
                required: true
            },
            socialMedia: {
                required: true
            }
        }
    }
</script>