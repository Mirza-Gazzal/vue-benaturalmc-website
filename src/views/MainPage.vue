<template>
    <div>
        <div class="page-wrapper">
            <!-- Preloader -->
            <div class="preloader"></div>
            <!-- DONE  -->  <page-header :links="headerLinks"></page-header>
            <!-- DONE  -->  <slider :slides="slides" :socialMedia="socialMedia"></slider>
            <!-- DONE -->   <specialize-section :SpecialGallery="gallerySpecialPicture" :ThumbGallery="galleryThumbPicture"></specialize-section>
            <!-- DONE  -->  <services-section :services="services"></services-section>
            <!-- DONE -->   <testimonials-section title="Example" subTitle="Example" :testimonials="testmational"></testimonials-section>
            <!-- DONE -->   <brands-section :brands="Brands"></brands-section>
            <!-- DONE -->   <video-section :videoInfo="videoInfo"></video-section>
            <!-- DONE -->   <faq-section :clientQuestions="clientQuestion"></faq-section>
            <!-- DONE -->   <app-section :mobileInfo="mobileInfo"></app-section>
            <!--  <news-section></news-section>-->
            <contact-section :contactInfo="contactInfo"></contact-section>
            <footer-section :socialMedia="footerSocialLinks"></footer-section>
            <ScrollUpArrow></ScrollUpArrow>
        </div>
    </div>
</template>


<script>
    import Header from "@/components/pageheader/Header.vue"
    import Slider from "@/components/slider/Slider.vue"
    import SpecializeSection from "@/components/specializesection/SpecializeSection.vue"
    import servicesSection from "@/components/services-section/main.vue"
    import testimonialsSection from "@/components/testimonials-section/main.vue"
    import brandsSection from "@/components/brands-section/main.vue"
    import VideoSection from "@/components/videosection/VideoSection.vue"
    import FaqSection from "@/components/faqsection/FaqSection.vue"
    import AppSection from "@/components/appsection/AppSection.vue"
    import NewsSection from "@/components/newssection/NewsSection.vue"
    import ContactSection from "@/components/contactsection/ContactSection.vue"
    import footerSection from "@/components/footer-section/main.vue"
    import ScrollUpArrow from "@/components/scrolluparrow/ScrollUpArrow.vue"
    import loadScript from "./../util/util.js";

    // Loading Data
    import services from './../data/services.json'
    import headerLinks from './../data/headerLinks.json'
    import slides from './../data/slides.json'
    import socialMedia from './../data/socialMedia.json'
    import testmational from './../data/testmational.json'
    import gallerySpecialPicture from './../data/gallerySpecialPicture.json'
    import galleryThumbPicture from './../data/galleryThumbPicture.json'
    import videoInfo from './../data/videoInfo.json'
    import Brands from './../data/brands.json'
    import clientQuestion from './../data/clientsQuestion.json'
    import mobileInfo from './../data/mobileInfo.json'
    import contactInfo from './../data/contactInfo.json'
    import footerSocialLinks from './../data/footerSocialLinks.json'

    export default {
        data() {
            return {
                services: services,
                headerLinks: headerLinks,
                slides: slides,
                socialMedia: socialMedia,
                testmational: testmational,
                gallerySpecialPicture: gallerySpecialPicture,
                galleryThumbPicture: galleryThumbPicture,
                videoInfo: videoInfo,
                Brands: Brands,
                clientQuestion: clientQuestion,
                mobileInfo: mobileInfo,
                contactInfo: contactInfo,
                footerSocialLinks: footerSocialLinks
            }
        },
        components: {
            pageHeader: Header,
            Slider: Slider,
            SpecializeSection: SpecializeSection,
            servicesSection: servicesSection,
            testimonialsSection: testimonialsSection,
            brandsSection: brandsSection,
            VideoSection: VideoSection,
            FaqSection: FaqSection,
            AppSection: AppSection,
            NewsSection: NewsSection,
            ContactSection: ContactSection,
            footerSection: footerSection,
            ScrollUpArrow: ScrollUpArrow
        },
        mounted() {
            let basePath = '/js/'
            loadScript([
                {
                    src: basePath + 'jquery.js',
                    onload: function () {
                        loadScript([
                            {src: basePath + 'popper.min.js'},
                            {src: basePath + 'bootstrap.min.js'},
                            {src: basePath + 'jquery.fancybox.js'},
                            {
                                src: basePath + 'owl.js',
                                onload: function () {
                                    loadScript([
                                        {src: basePath + 'jquery.mCustomScrollbar.concat.min.js'},
                                        {
                                            src: basePath + 'wow.js',
                                            onload: () => {
                                                loadScript([
                                                    {src: basePath + 'appear.js'},
                                                    {src: basePath + 'mixitup.js'},
                                                    {src: basePath + 'script.js'},
                                                    {src: basePath + 'color-settings.js'},
                                                ])
                                            }
                                        },
                                    ])
                                }
                            },
                        ])
                    }
                }
            ])
        }
    }
</script>
