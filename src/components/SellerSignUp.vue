<template>
    <div class="container uk-margin uk-margin-left uk-text-center">
        <form class="uk-form-stacked">

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Email</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="form-stacked-text" type="text" placeholder="Your email please">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Firstname</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="form-stacked-text" type="text" placeholder="Your first name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">Lastname</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="form-stacked-text" type="text" placeholder="Your last name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="form-stacked-text">State of residence</label> <!-- this should be a drop down, but time!! -->
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="form-stacked-text" type="text" placeholder="Your email please">
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
                <button class="uk-button uk-button-default" :disabled="fillAllFields" @click="signup">Login</button>
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
    fillAllFields() {
      return this.sellerStateOfResidence !== '' || this.lastname !== '' || this.fullname !== '' || this.email !== '' || this.password !== ''
    },
    signup(){
        this.signupbtn = 'loading...'
        axios.get(`http://localhost:8000/api/sellers/?slug=${this.email}`, { // sleepy-forest-75737 // pacific-hamlet-90419 // using
            
        }).then(res => {
          if (res.data.objects.length > 0) {
            console.log('lastname taken', res)
          } else {
            axios.post('http://localhost:8000/api/sellers/', {
              lastname: this.lastname.trim(), // pacific-hamlet-90419 // using
              firstname: this.firstname.trim(),
              state_of_residence: this.sellerStateOfResidence.trim(),
              email: this.email.trim(),
              password: md5(this.password)
            }).then(res => {
                console.log('registered', res)
                /* sessionStorage.setItem('id', res.data.id)
                sessionStorage.setItem('profile', JSON.stringify(res.data)) */
                this.$router.push('/seller-dashboard')
            }).catch( error => {
              console.log(error)
            })
          }
        }).catch( err => {
          console.log(err)
        })
    }
  }
}
</script>

<style scoped>

button[disabled="disabled"] {
  cursor: not-allowed;
}

</style>