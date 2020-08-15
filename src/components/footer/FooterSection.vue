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
                                <div class="footer-column col-sm-12">
                                    <div class="footer-widget about-widget">
                                        <div class="footer-logo">
                                            <figure>
                                                <a href="index-2.html">
                                                    <img src="/logo/256-light.png" alt="">
                                                </a>
                                            </figure>
                                        </div>
                                        <div class="">
                                            <div class="text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</div>
                                        </div>
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
                                                <li ><a href="about.html">aaa</a></li>

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
                                <li v-for="(icons,key) in socialMedia"><a :href="icons.link"><i :class=icons.class></i></a></li>


                            </ul>
                        </div>

                        <div class="copyright-text">
                            <a href="https://www.facebook.com" target="_blank">FaceBook</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        <!-- End Main Footer -->
    </div>
</template>
<script>
    export default{

        props: {
            socialMedia: {
                required: true
            }
        }


    }
</script>
