<template>
    <section id="brands-section" class="clients-section style-two mt-5 pt-5">
        <div class="auto-container">
            <div class="sponsors-outer">
                <!--Sponsors Carousel-->
                <ul class="sponsors-carousel owl-carousel owl-theme" >
                    <li class="slide-item" v-for="(brand,key) in brands"><figure class="image-box"><a href="#"><img :src="brand.imageURL" alt=""></a></figure></li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props : {
            brands:{
             required: ""
            }

        }

    }
</script>
