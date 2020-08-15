<template>
<!-- Process Section -->
<section id="services-section" class="process-section" :style="'background-image: url('+backgroundImage+');'">
    <div class="auto-container">
        <div class="sec-title light">
            <span class="float-text">{{title}}</span>
            <h2>{{subTitle}}</h2>
        </div>
        <div class="row">
            <!-- Process Block -->
            <div class="process-block col-lg-6 col-md-6 col-sm-12" v-for="(service, key) in services">
                <div class="inner-box">
                    <span class="count">{{String(key+1).padStart(2, 0)}}</span>
                    <img :src="service.image" style="border-radius: 12px;height: 256px !important;width: 256px" />
                    <h4 class="mt-3 mb-2"><a style="color: #ff8a00">{{service.title}}</a></h4>
                    <div class="text" v-if="service.hasOwnProperty('text')">{{service.text}}</div>
                    <div class="link-box" v-if="service.hasOwnProperty('link')">
                        <a :href="service.link">Read More</a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>
<!--End Process Section -->
</template>
<script>
    export  default {
        props :{
            title: {
                required: false,
                default: 'Our Services'
            },
            subTitle: {
              required: false,
              default: 'Treatments'
            },
            services: {
               required: true,
               type: Array
           },
            backgroundImage: {
                default: '/images/background/8.jpg',
                required: false
            }
        }
    }
</script>
