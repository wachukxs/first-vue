<template>
    <div class="container uk-margin uk-margin-right uk-margin-left">

        <nav class="uk-navbar-container" uk-navbar>
            <div class="uk-navbar-left">

                <ul class="uk-navbar-nav">
                    <li class="uk-active"><a href="#">Home</a></li>
                    <li>
                        <a href="#">Sellers</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="/seller-login">Login</a></li>
                                <li><a href="/seller-signup">Sign up</a></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <a href="#">Buyers</a>
                        <div class="uk-navbar-dropdown">
                            <ul class="uk-nav uk-navbar-dropdown-nav">
                                <li><a href="#">Interests</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>

            </div>
        </nav>

        <div class="uk-margin-top uk-child-width-expand@s uk-text-center uk-grid-match" uk-height-match="target: > div > .uk-card" uk-grid>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-4.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>Some details about this product. Name, Price, Description, Seller location.</p>

                        
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-3.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>Some details about this product. Name, Price, Description, Seller location.</p>

                        <div class="uk-margin-small">
                            <div class="uk-button-group">
                                <button class="uk-button uk-button-secondary">Buy</button>
                                <button class="uk-button uk-button-primary">8 others intrested</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-2.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>Some details about this product. Name, Price, Description, Seller location.</p>

                        
                    </div>
                </div>
            </div>

            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-1.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>Some details about this product. Name, Price, Description, Seller location.</p>

                        
                    </div>
                </div>
            </div>

        </div>
    </div><!-- Shouldn't buyers be able to cancel their interest? like delete them, to show they no longer want. And this action would notify the seller!?!? -->
</template>

<script>
export default {
    name: 'Index',
    methods: {
        showInterest() {
            
        }
    }
}
</script>

<style scoped>

</style>