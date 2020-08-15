<template>
    <section id="clients-section" class="testimonial-section-two">
        <div class="auto-container">
            <div class="sec-title">
                <span class="float-text">{{title}}</span>
                <h2>{{subTitle}}</h2>
            </div>

            <div class="testimonial-carousel-two owl-carousel owl-theme" v-for="(Client , key) in Clients">
                <!-- Testimonial block two -->
                <div class="testimonial-block-two">
                    <div class="inner-box">
                        <div class="text">{{Client.text}}</div>
                        <div class="info-box">
                            <div class="thumb"><img :src="Client.imageURL"></div>
                            <h5 class="name">{{Client.name}}</h5>
                            <span class="date">{{Client.data}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
    export default {


        props: {
            Clients:{
              required: true
            },
            title: {
                required: false,
                default: 'Testimonial'
            },
            subTitle: {
                required: false,
                default: 'What Clients Says'
            },

        }

    }
</script>

