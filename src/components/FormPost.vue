<template>
     <div class="order container" >
        <form
            @submit.prevent
            class="form"
        > 
            <div class="close" @click='closeForm()'></div>
            <input 
                v-model="formInput.name"
                class="input"
                type="text" 
                placeholder="Имя"
            >
            <div v-if="getNameCheck === true">
                Введите имя
            </div>
            <input 
                v-model="formInput.number"
                class="input"
                type="text" 
                placeholder="Номер телефона"
                v-maska="'+7(###)### ## ##'"
            >
            <div v-if="getNumberCheck === true">
                Неверный номер
            </div>
            <div class="button" @click="createForm()">Заказать</div>
       </form>
    </div>

</template>

<script>
import {mapGetters, mapMutations} from "vuex"
    export default {
        data() {
            return {
                formInput: {
                    name: '',
                    number: ''
                },
                getNameCheck: false,
                getNumberCheck: false,
            }
        },
        computed: {
            ...mapGetters(["FORM_POST", "POSTS_BASKET"])
        },
        methods: {
            ...mapMutations(['closeForm','fullReadyForm']),
            createForm(){
                let newPhone = this.formInput.number.replace(/_/g, '').replace(/\s/g, '');
                if(this.formInput.name.length > 0){
                    this.getNameCheck = false;
                } else {
                    this.getNameCheck = true;   
                }
                if(newPhone.length < 14){
                    this.getNumberCheck = true;
                } else {
                    this.getNumberCheck = false;   
                }   
        
                if(this.getNameCheck === false && this.getNumberCheck === false){
                    const newPost = {
                        id: Date.now(),
                        name: this.formInput.name,
                        number: this.formInput.number,
                        orderNumber: this.POSTS_BASKET.length + Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000
                    }
                    this.FORM_POST.push(newPost)
                    this.formInput = {
                        name: '',
                        number: ''
                    }
                    this.fullReadyForm(true)
                    this.closeForm()
                }
            }
        },
    }
</script>

<style scoped>
.button {
    padding: 10px;
    border: none;
    cursor: pointer;
    color: #fff;
    transition: .3s;
    margin: 15px 0 15px 0;
    background-color: #e41b47;
    font-size: 14px;
    border-radius: 8px;
} 

.button:hover {
    color: gold;
    background-color: #881931;
}

.container {
    width: 1200px;
}

.form {
    display: flex;
    flex-direction: column;
    position: fixed;
    border-radius: 8px;
    top: 150px;
    background: #FFFFFF;
    padding: 40px;
    text-align: center;
    box-shadow: 0 0 0px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
    z-index: 1;
}

.order {
    max-width: 250px;
    padding: 8% 0 0;
    margin: 0 auto;
    height: 5000px;
}
.order::before{
    position: fixed;
    content: '';
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    min-height: 100%;
    background-color: rgb(61, 61, 61);
    opacity: .5;
}

.input {
    margin-top: 10px;
}

.close{
    position: absolute;
    top: 0px;
    right: 15px;
    width: 30px;
    height: 30px;
    cursor: pointer;
}

.close:before,
.close:after {
    content: "";
    position: absolute;
    top: 21px;
    left: 10px;
    width: 26px;
    height: 4px;
    background: #e62f57;
}

.close:before {
    webkit-transform: rotate(45deg);
    transform: rotate(45deg);
}

.close:after {
    webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
</style>