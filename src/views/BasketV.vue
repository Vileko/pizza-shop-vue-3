<template>
  <div class="pizza__blocks">
    <div>
      Стоимость заказа:
      <strong>
        {{POSTS_BASKET.map(ar => x+= ar.pricePosts, x = 0).reverse()[0]}}
      </strong>
    </div>
    <div>
      <button @click="actionsForm()">Оформить</button>
    </div>
    <div 
      class='pizza_block-flex' 
      v-for="post in POSTS_BASKET" 
      :key='post.id'
    >
      <img class="pizza_img" :src="post.img" alt="">
      <div class="pizza_description">
        <h2>{{post.title}}</h2>
        <p>{{post.compound}}</p>
        <p>{{post.number}} шт</p>
        <div class="block_price">
          <button @click="decreasePrice(post)">-</button>
          <p>{{post.pricePosts}}</p>
          <button @click='increasePrice(post)'>+</button>
        </div>
        <div class="close" @click='deletePost(post.id)'></div>
      </div>
    </div>
    <div 
      v-if='ACTIVE_FORM === true'
    >
      <form-post/>
    </div>
    <div>
      <finished-wedge-mold/>
    </div>
  </div>
</template>

<script>
import FormPost from '@/components/FormPost.vue'
import { mapGetters, mapMutations } from 'vuex'
import FinishedWedgeMold from '@/components/UI/FinishedWedgeMold.vue'
export default {
  components: { FormPost, FinishedWedgeMold },
  computed: {
    ...mapGetters(['POSTS_BASKET', 'ACTIVE_FORM'])
  },
  methods: {
    ...mapMutations(['deletePost', 'increasePrice', 'decreasePrice', 'actionsForm']),
  }
}
</script>

<style scoped>
.pizza__blocks {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column; 
}

.pizza_block-flex {
  display: flex;
  align-items: center;
  width: 800px;
  max-height: 250px;
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  transition: .4s;
  border-radius: 6px;
  position: relative;
}

@media screen and (max-width: 850px) {
  .pizza_block-flex  {
    width: 600px;
  }
}

@media screen and (max-width: 615px) {
  .pizza_block-flex  {
    width: 550px;
  }
}

@media screen and (max-width: 600px) {
  .pizza_block-flex  {
    flex-direction: column;
    width: 300px;
    max-height: 400px;
  }
}

.pizza_img {
  width: 300px;
}

.pizza_description {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 15px;
}

.block_price {
  display: flex;
  justify-content: center;
  align-items: center;
}

.block_price p {
  padding: 0 15px;
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
