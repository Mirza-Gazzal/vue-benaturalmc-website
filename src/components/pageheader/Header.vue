<template>
    <div>
        <!-- Main Header-->
        <header class="main-header header-style-three">
            <div class="auto-container">
                <div class="main-box clearfix">
                    <div class="logo-box">
                        <div class="logo" style="position: relative;left: 1px; top:-92px; width: 256px; height: 128px">
                            <a href="#">
                                <img src="/logo/256.png" alt="" title="">
                            </a>
                        </div>
                    </div>

                    <div class="nav-outer">
                        <!-- Main Menu -->
                        <nav class="main-menu navbar-expand-md ">
                            <div class="navbar-header">
                                <!-- Toggle Button -->
                                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="icon flaticon-menu-button"></span>
                                </button>
                            </div>

                            <div class="collapse navbar-collapse clearfix" id="navbarSupportedContent">
                                <ul class="navigation clearfix">
                                    <li v-for="link in links">
                                        <a :href="link.href">{{link.text}}</a>
                                    </li>
                                </ul>
                            </div>
                        </nav><!-- Main Menu End-->

                        <!-- Main Menu End-->
                        <div class="outer-box clearfix" v-if="includeSideMenu">
                            <button class="nav-toggler"><span class="fa fa-bars"></span></button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Sticky Header  -->
            <div class="sticky-header">
                <div class="auto-container clearfix">
                    <!--Logo-->
                    <div class="logo pull-left" style="position: absolute;left: 16px; top:-42px; width: 128px;">
                        <a href="index-2.html" title=""><img src="/logo/128.png" alt="" title=""></a>
                    </div>
                    <!--Right Col-->
                    <div class="pull-right">
                        <!-- Main Menu -->
                        <nav class="main-menu">
                            <div class="navbar-collapse show collapse clearfix">
                                <ul class="navigation clearfix">
                                    <li v-for="link in links">
                                        <a :href="link.href">{{link.text}}</a>
                                    </li>
                                </ul>
                            </div>
                        </nav><!-- Main Menu End-->
                    </div>
                </div>
            </div><!-- End Sticky Menu -->
        </header>
        <!--End Main Header -->

        <MainMenu v-if="includeSideMenu" email-address="Test@Test.com" phone-number="+96100000000"></MainMenu>
    </div>
</template>
<script>
    export  default {
        components: {
            MainMenu: () => import("@/components/mainmenu/MainMenu.vue")
        },
        props : {
            links: {
                required: true
            },
            includeSideMenu: {
                required: false,
                default: false
            }
        }
    }
</script>