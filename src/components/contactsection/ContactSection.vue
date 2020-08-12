<template>
    <div>
        <!-- Contact Section -->
        <section class="contact-section">
            <div class="inner-container">
                <div class="sec-title">
                    <span class="float-text">{{title}}</span>
                    <h2>{{subTitle}}</h2>
                </div>

                <div class="row">
                    <!-- Info Column -->
                    <div class="info-column col-lg-4 col-md-12 col-sm-12">
                        <div class="inner-column" v v-for="(info,key) in contactInfo">
                            <h4>{{info.Title}}</h4>
                            <ul class="contact-info">
                                <li>{{info.Address1}}<br> {{info.Address2}}</li>
                                <li>{{info.Phone1}} <br>{{info.Phone2}}</li>
                                <li><a href="#">{{info.Email}}</a></li>
                            </ul>
                        </div>
                    </div>

                    <!-- Form Column -->
                    <div class="form-column col-lg-8 col-md-12 col-sm-12">
                        <div class="inner-column">
                            <!-- Contact Form -->
                            <div class="contact-form">
                                <form method="post" action="#">
                                    <div class="row">
                                        <div class="form-group col-lg-6 col-md-12">
                                            <input type="text" name="username" placeholder="Name" required>
                                        </div>

                                        <div class="form-group col-lg-6 col-md-12">
                                            <input type="text" name="phone" placeholder="Phone" required>
                                        </div>

                                        <div class="form-group col-lg-6 col-md-12">
                                            <input type="text" name="company" placeholder="Company" required>
                                        </div>

                                        <div class="form-group col-lg-6 col-md-12">
                                            <input type="email" name="email" placeholder="Email" required>
                                        </div>

                                        <div class="form-group col-lg-12 col-md-12">
                                            <textarea name="message" placeholder="Massage"></textarea>
                                        </div>

                                        <div class="form-group col-lg-12 col-md-12">
                                            <button class="theme-btn btn-style-three" type="submit" name="submit-form">Submit</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!--End Contact Section -->
    </div>
</template>
<script>
    export default {

        props : {
            title: {
                required: false,
                default: "Contact Us"
            },
            subTitle: {
                required: false,
                default: "Example"
            },
            contactInfo: {
                required: true,
            }



        }

    }
</script>