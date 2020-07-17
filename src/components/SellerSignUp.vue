<template>
    <div class="container uk-margin uk-margin-left uk-text-center">
        <form class="uk-form-stacked">

            <div class="uk-margin">
                <label class="uk-form-label" for="e">Email</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="e" v-model="email" type="text" placeholder="Your email please">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="fn">Firstname</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="fn" v-model="firstname" type="text" placeholder="Your first name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="ln">Lastname</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="ln" v-model="lastname" type="text" placeholder="Your last name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="sor">State of residence</label> <!-- this should be a drop down, but time!! -->
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" v-model="sellerStateOfResidence" id="sor" type="text" placeholder="Your state of residence">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Password</label>
                <div class="uk-form-controls">
                    <div class="uk-inline">
                        <input v-on:keyup.enter="signup" data-uk-tooltip title="Enter a memorable secure password" class="uk-input uk-border-rounded uk-form-width-large" :type="loginPasswordFieldType" v-model="password" placeholder="Password">
                        <a class="uk-form-icon uk-form-icon-flip" v-bind:uk-icon="loginPasswordIcon" @click="switchSignupVisibility"></a>
                        </div>
                </div>
            </div>

            <div class="uk-margin">
              <!-- https://stackoverflow.com/a/56924316/9259701 -->
                <button class="uk-button uk-button-default" type="button" :disabled="fillAllFields" @click="signup">Signup</button>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios'
import md5 from 'md5'
export default {
    name: 'SellerSignUp',
    data () {
      return {
        loginbutton: true,
        firstname:'',
        password:'',
        loginbtn:'Login',
        lastname: '',
        signupbtn: 'Signup',
        sellerStateOfResidence: '',
        email: '',
        loginPasswordFieldType: 'password',
        loginPasswordIcon: "icon: unlock",
      }
  },
  methods: {
switchSignupVisibility() {
      this.loginPasswordIcon = this.loginPasswordIcon === "icon: lock" ? "icon: unlock" : "icon: lock";
      this.loginPasswordFieldType = this.loginPasswordFieldType === 'password' ? 'text' : 'password';
    },
    signup(){
        this.signupbtn = 'loading...'
        axios.get(`http://localhost:8000/api/v1/sellers/?slug=${this.email}`, { // sleepy-forest-75737 // pacific-hamlet-90419 // using
            
        }).then(res => {
          if (res.data.objects.length > 0) {
            console.log('lastname taken', res)
          } else {
            axios.post('http://localhost:8000/api/v1/sellers/', {
              lastname: this.lastname.trim(), // pacific-hamlet-90419 // using
              firstname: this.firstname.trim(),
              state_of_residence: this.sellerStateOfResidence.trim(),
              email: this.email.trim(),
              password: md5(this.password)
            }).then(res => {
                console.log('registered', res)
                sessionStorage.setItem('seller-origin-state', this.sellerStateOfResidence.trim())
                sessionStorage.setItem('seller-email', this.email.trim())
                this.$router.push('/seller-dashboard')
            }).catch( error => {
              console.log(error)
            })
          }
        }).catch( err => {
          console.log('signup err', err)
        })
    }
  },
  computed: {
    
    fillAllFields() {
      return this.sellerStateOfResidence == '' || this.lastname == '' || this.firstname == '' || this.email == '' || this.password == ''
    },
  }
}
</script>

<style scoped>

button[disabled="disabled"] {
  cursor: not-allowed;
}

</style>