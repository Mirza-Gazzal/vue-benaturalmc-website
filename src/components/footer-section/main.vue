<template>
    <div>
        <!-- Main Footer -->
        <footer class="main-footer alternate" style="background-image: url(/images/background/5.jpg);">
            <div class="auto-container">
                <!--Widgets Section-->
                <div class="widgets-section">
                    <div class="row">
                        <!--Big Column-->
                        <div class="big-column col-xl-8 col-lg-8 col-md-8 col-sm-12">
                            <div class="row">
                                <!--Footer Column-->
                                <div class="footer-column col-sm-3">
                                    <div class="footer-widget about-widget">
                                        <div class="footer-logo">
                                            <figure>
                                                <a href="index-2.html">
                                                    <img src="/logo/Gold128px.png" alt="">
                                                </a>
                                            </figure>
                                        </div>
                                    </div>
                                </div>
                                <div class="footer-column col-sm-8 p-0 mt-3">
                                    <div class="text text-white">
                                        {{appData.brief}}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!--Big Column-->
                        <div class="big-column col-xl-4 col-lg-4 col-md-4 col-sm-12">
                            <div class="row clearfix">
                                <div class="footer-column col-sm-12">
                                    <div class="footer-widget links-widget">
                                        <h2 class="widget-title">Useful links</h2>
                                        <div class="widget-content">
                                            <ul class="list">
                                                <li v-for="link in footerLinks">
                                                    <a :href="link.link">{{link.title}}</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!--Footer Bottom-->
            <div class="footer-bottom">
                <div class="auto-container">
                    <div class="inner-container clearfix">
                        <div class="social-links">
                            <ul class="social-icon-two">
                                <li v-for="(icons,key) in socialMedia">
                                    <a :href="icons.link" target="_blank"><i :class=icons.class></i></a>
                                </li>
                            </ul>
                        </div>

                        <div class="copyright-text">
                            <a href="#" target="_blank">CopyRight (C) 2020 BeNaturalMc</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End Main Footer -->
    </div>
</template>
<script>
    import appData from '@/data/app.json'
    import footerLinks from '@/data/footerLinks.json'
    export default{
        data () {
            return {
                appData: appData,
                footerLinks: footerLinks
            }
        },
        props: {
            socialMedia: {
                required: true
            }
        }


    }
</script>
