<template>
    <div class="container uk-margin uk-margin-left">
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
                <label class="uk-form-label" for="form-stacked-text">State of origin</label> <!-- this should be a drop down, but time!! -->
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
                <button class="uk-button uk-button-default" @click="signup">Login</button>
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
      state_of_residence: '',
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
      if (this.lastname == '' || this.fullname == '' || this.email == '' || this.password == '') {
        this.issue = 'Please fill all fields.'
      } else if(!this.reg.test(this.email)){
        this.issue = "Enter correct email please."
      } else {
        this.signupbtn = 'loading...'
        axios.post('https://shukran-api.herokuapp.com/api/myprofile/', { // sleepy-forest-75737
           lastname: this.lastname.toLowerCase().trim() // pacific-hamlet-90419 // using
        }).then(res => {
          if (res.data.length >= 1) {
            console.log('lastname taken')
              this.issue = 'lastname already taken...'
              this.signupbtn = 'Signup'
          } else {
            axios.post('https://shukran-api.herokuapp.com/api/createaccount/', {
              lastname: this.lastname.toLowerCase().trim(),
              fullname: this.fullname,
              email: this.email,
              password: md5(this.password)
            }).then(res => {
              this.signupbtn = 'Signup'
              if (res.data.message == "User's email exist") {
                console.log('cannot register')
                this.issue = "User's email exist"
              } else {
                console.log('registered')
                sessionStorage.setItem('lastname', res.data.lastname)
                sessionStorage.setItem('id', res.data._id)
                sessionStorage.setItem('profile', JSON.stringify(res.data))
                this.$router.push('/profile')
              }
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
}
</script>

<style scoped>

</style>