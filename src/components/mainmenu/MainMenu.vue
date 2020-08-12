<template>
    <div>
        <!--Form Back Drop-->
        <div class="form-back-drop"></div>

        <!-- Hidden Bar -->
        <section class="hidden-bar">
            <div class="inner-box">
                <div class="cross-icon"><span class="fa fa-times"></span></div>
                <div class="title">
                    <h2>Get Appointment</h2>
                </div>

                <!--Appointment Form-->
                <div class="appointment-form">
                    <form method="post" action="#">
                        <div class="form-group">
                            <input type="text" name="text" value="" placeholder="Name" required>
                        </div>
                        <div class="form-group">
                            <input type="email" name="email" value="" placeholder="Email Address" required>
                        </div>
                        <div class="form-group">
                            <input type="text" name="phone" value="" placeholder="Phone no." required>
                        </div>
                        <div class="form-group">
                            <textarea placeholder="Message"></textarea>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="theme-btn btn-style-three">Submit now</button>
                        </div>
                    </form>
                </div>

                <!--Contact Info Box-->
                <div class="contact-info-box">
                    <ul class="info-list">
                        <li>{{EmailAddress}}</li>
                        <li>{{PhoneNumber}}</li>
                    </ul>
                    <ul class="social-list clearfix">
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">Google +</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <!--End Hidden Bar -->
    </div>
</template>
<script>
    export  default {

        props : {
            EmailAddress : '',
            PhoneNumber : ''
        }

    }
</script>