<template>
    <section id="clients-section" class="testimonial-section-two">
        <div class="auto-container">
            <div class="sec-title">
                <span class="float-text">{{title}}</span>
                <h2>{{subTitle}}</h2>
            </div>

            <div class="testimonial-carousel-two owl-carousel owl-theme">
                <div class="testimonial-block-two" v-for="(testimonial , key) in testimonials">
                    <div class="inner-box">
                        <div class="text">{{testimonial.text}}</div>
                        <div class="info-box">
                            <div class="thumb">
                                <img :src="testimonial.imageURL" loading="lazy">
                            </div>
                            <h5 class="name">{{testimonial.name}}</h5>
                            <span class="date">{{testimonial.data}}</span>
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
            testimonials:{
              required: true
            },
            title: {
                required: false,
                default: 'Testimonials'
            },
            subTitle: {
                required: false,
                default: 'What Clients Says'
            },

        }

    }
</script>

