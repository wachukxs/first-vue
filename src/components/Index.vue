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

                        <div class="uk-margin-small">
                            <div class="uk-button-group">
                                <button class="uk-button uk-button-secondary">Buy</button>
                                <div uk-dropdown="mode: click">
                                    Please provide your details.
                                    <div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Name" v-model="buyerName" value="">
                                        </div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Email" v-model="buyerEmail" value="">
                                        </div>
                                        <div class="uk-margin">
                                            <input class="uk-input uk-form-width-medium" type="text" placeholder="Location" v-model="buyerStateOfResidence" value="">
                                        </div>
                                        <div class="uk-margin"> <!-- after notifying seller, disable 'Buy' button -->
                                            <button class="uk-button uk-button-default" type="button" @click="showIntrest">Notify Seller</button>
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

        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Index',
    data () {
      return {
        buyerEmail: '',
        buyerName: '',
        buyerStateOfResidence: '',
        firstname:'',
        password:'',
        loginbtn:'Login',
        lastname: '',
        signupbtn: 'Signup',
        email: '',
        loginPasswordFieldType: 'password',
        loginPasswordIcon: "icon: unlock",
      }
  },
    methods: {
        showInterest() {
            
        },
        getAllItems() { //
            axios.get('http://localhost:8000/api/v1/items/?format=json&limit=0').then(data => {
                console.log('items for sale', data)
            }, err => {
                console.error('err fetching items for sale', err)
            })
        }
    },
  mounted() {
    
  },
    computed: {
        filteresults: function (/* params */) {
        let filtered = this.creators;
      if (this.search) {
        filtered = this.creators.filter(
          m => m.username.toLowerCase().indexOf(this.search.toLowerCase()) > -1
        );
      }
      return filtered;
        }
    }
}
</script>

<style scoped>

</style>