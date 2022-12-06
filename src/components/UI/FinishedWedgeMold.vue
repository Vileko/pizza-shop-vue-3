<template>
    <div class="modal_wrapper" v-if="FULL_READY_FORM === true">
        <div class="modal-window">   
            <div class="close" @click='closeReadyForms()'></div>
            <div class="model_order_number">
                <p>Ваш заказ № {{FORM_POST[FORM_POST.length - 1].orderNumber}}</p>
                Спасибо за заказ <strong>{{FORM_POST[FORM_POST.length - 1].name}}</strong>
            </div>
        </div>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'
    export default {
        computed: {
            ...mapGetters(['FULL_READY_FORM', 'FORM_POST'])
        },
        methods: {
            ...mapMutations(['fullReadyForm','closeReadyForms'])
        }
    }
</script>

<style scoped>
.modal_wrapper {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 200px;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
}

.modal-window {
    position: relative;
    width: 350px;
    height: 100px;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    z-index: 100;
}

.modal-window::before {
    position: absolute;
    content: '';
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    box-shadow: 0px 0px 0px 9999px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    
}

.model_order_number {
    width: 300px;
    padding: 25px;
    text-align: center;
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