<template>
    <div class="uk-margin-top uk-margin-left">
        <form class="uk-form-stacked">

            <div class="uk-margin">
                <label class="uk-form-label" for="e">Item name</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="in" v-model="itemName" type="text" placeholder="Name">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="fn">Item price</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="fn" v-model="itemPrice" type="text" placeholder="Price">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="ln">Item description</label>
                <div class="uk-form-controls">
                    <input class="uk-input uk-border-rounded uk-form-width-large" id="ln" v-model="itemDescription" type="text" placeholder="Description">
                </div>
            </div>

            <div class="uk-margin">
                <label class="uk-form-label" for="sor">Item image</label> <!-- this should be a drop down, but time!! -->
                <div class="uk-form-controls">
                    <div uk-form-custom="target: true">
                        <input type="file">
                        <input class="uk-input uk-form-width-medium" type="text" placeholder="Select image" disabled>
                    </div>
                </div>
            </div>

            <div class="uk-margin">
              <!-- https://stackoverflow.com/a/56924316/9259701 -->
                <button class="uk-button uk-button-default" type="button" :disabled="fillAllFields" @click="postItem">Sell</button>
            </div>

        </form>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SellerDashboard',
    data() {
        return {
            sellerStateOfResidence: sessionStorage.getItem('seller-origin-state'),
            email: sessionStorage.getItem('seller-email'),
            itemDescription: '',
            itemName: '',
            itemPrice: '',
            selectedFile: '',
        }
    },
    methods: {
        onFileChanged(event) {
            this.selectedFile = event.target.files[0]
        },
        postItem() {
            let formData = new FormData();
            formData.append("price", this.itemPrice);
            formData.append("image_name", this.selectedFile);
            formData.append("description", this.itemDescription);
            formData.append("name", this.itemName);
            formData.append("status", 'for-sale');
            
            axios
                .post("http://localhost:8000/api/v1/items/", formData, {
                onUploadProgress: progressEvent => {
                    console.log(progressEvent.loaded / progressEvent.total);
                }
                })
                .then(res => {
                    console.log('add new item res', res)
                })
                .catch(error => {
                console.log("error occured", error);
                });
        }
    },
    computed: {
        fillAllFields() {
            return true
        }
    }
}
</script>

<style scoped>

</style>