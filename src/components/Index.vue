<template>
    <div class="container uk-margin uk-margin-right uk-margin-left">
        <div class="uk-child-width-expand@s uk-text-center uk-grid-match" uk-height-match="target: > div > .uk-card" uk-grid>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-4.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>do eiusmod tempor incididunt.</p>

                        <div class="uk-margin-small">
                            <div class="uk-button-group">
                                <button class="uk-button uk-button-secondary">Buy</button>
                                <div uk-dropdown="mode: click">
                                    Please provide your details.
                                    <div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Name" value="">
                                        </div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Email" value="">
                                        </div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Location" value="">
                                        </div>
                                        <div class="uk-margin"> <!-- after notifying seller, disable 'Buy' button -->
                                            <button class="uk-button uk-button-default" type="button" >Notify Seller</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="uk-button uk-button-primary">8 others intrested</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="../assets/images/image-3.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>do eiusmod tempor incididunt.</p>

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
                        <p>do eiusmod tempor incididunt.</p>

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
                        <img src="../assets/images/image-1.jpg" alt="">
                    </div>
                    <div class="uk-card-body">
                        <p>do eiusmod tempor incididunt.</p>

                        <div class="uk-margin-small">
                            <div class="uk-button-group">
                                <button class="uk-button uk-button-secondary">Buy</button>
                                <button class="uk-button uk-button-primary">8 others intrested</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
}
</script>

<style scoped>

</style>