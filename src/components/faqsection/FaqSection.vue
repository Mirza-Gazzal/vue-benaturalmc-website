<template>
    <section id="faq-section" class="faq-section">
            <div class="auto-container">
                <div class="row">
                    <!-- Image Column -->
                    <div class="image-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="image-box">
                                <figure class="image">
                                    <img v-lazy="imageBackground" alt="Beauty">
                                </figure>
                            </div>
                        </div>
                    </div>

                    <div class="accordion-column col-lg-6 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <div class="sec-title">
                                <span class="float-text">{{sectionTitle}}</span>
                                <h2>{{sectionSubTitle}}</h2>
                            </div>
                            <ul class="accordion-box">

                                <!--Block-->
                                <li class="accordion block" v-for="(question,key) in clientQuestions">
                                    <div class="acc-btn" >{{question.clientsQuestion}}<div class="icon fa fa-plus-square"></div></div>
                                    <div class="acc-content">
                                        <div class="content">
                                            <div class="text">{{question.answer}}</div>
                                        </div>
                                    </div>
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
            clientQuestions: {
              required: true
            },
            imageBackground: {
                required: false,
                default: '/images/resource/faq-img.jpg'
            },
            sectionTitle: {
                required: false,
                default: 'Example'
            },
            sectionSubTitle: {
                required: false,
                default: 'Example Questions'
            }
        }
    }

</script>
