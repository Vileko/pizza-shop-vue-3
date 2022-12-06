<template>
    <div>
        <div class="pizza__blocks">
            <div class="pizza_block" v-for='p in productsPizza' :key='p.id'>
                <img class="pizza_img" :src="p.img" alt="">
                <div class="block__posts">
                    <div>
                        <h1>{{p.title}}</h1>
                        <p>{{p.compound}}</p>
                    </div>
                    <div class="block_bottom">
                        <p>{{p.price}} р</p>
                        <button 
                            class="close" 
                           :class="{active: p.active}"
                            @click='getProductPost(p)'
                        >
                            Купить
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        methods:{
            getProductPost(p){
                let indexBasket = this.productBasket.findIndex(value => value.id === p.id)
                if(indexBasket < 0) {
                    const newItem = {
                        ...p,
                        number: 1,
                        pricePosts: p.price
                    }
                    this.productBasket.push(newItem) 
                    p.active = true
                }
            },
            
        },
        computed: {
            productBasket(){
                return this.$store.state.basket
            },
            productsPizza(){
                return this.$store.getters.PRODUCTS
            }
        }
    }
</script>

<style scoped>
.active {
    background-color: #42b983;
}
.no_active {
    background-color: red;
}

.pizza__blocks {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.pizza_block {
    width: 300px;
    background-color: rgb(255, 255, 255);
    margin-top: 10px;
    transition: .4s;
    border-radius: 6px;
}

.pizza_block:hover {
    box-shadow: 1px 1px 50px rgb(97, 97, 97);
    background-color: rgb(238, 238, 238);
}

.pizza_img {
    width: 300px;
}

.block__posts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 10px;
    margin: 0;
    min-height: 240px;
    background-color: rgb(255, 255, 255);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
}

.block_bottom {
    display: flex;
    align-items: center;
    justify-content: space-around;
}


</style>