<template>
  <div class="container">
    <h1>Counter App </h1>
    <div class="counter">
      <div class="count" id="count">{{ counter.count }}</div>
      <div class="count-btns">
        <button class="count-btn" @click="counter.increment">
          <box-icon type="solid" name="up-arrow" color='purple' ></box-icon>
        </button>
        <button class="count-btn" @click="counter.reset">
          <box-icon name='reset' color='purple' ></box-icon>
        </button>
        <button class="count-btn" @click="counter.decrement">
          <box-icon type="solid" name="down-arrow" color='purple' ></box-icon>
        </button>
      </div>

      <div class="value-container">
        <input type="number" v-model="newCountValue" size="3" maxlength="5" />
        <button class="value-btn" @click="setCount">Set Value</button>
      </div>
    </div>
  </div>
</template>

<script>
import useCounter from "../composables/useCounter";
// import useMutation from '../useMutation'
import { ref } from "vue";
export default {
  setup() {
    const counter = useCounter();
    const newCountValue = ref(0);
    // const { commit } = useMutation()
    // function increment() {
    //   commit('increment')
    // }
    function setCount() {
      counter.setValue(newCountValue.value);
    }
    return {
      counter,
      newCountValue,
      setCount,
    };
  },
};
</script>


<style scoped>
.container {
  background: yellow;
  height: 80vh;
  width: 70vw;
  border-radius: 2rem;
  margin: 5% auto ;
}
.count {
  /* background: purple; */
  color: purple;
  /* height: 25%;
  width: 25%; */
  font-size: 5rem;
  text-align: center;
  margin-top: -10rem;
   animation: bounce 0.5s ease-in-out;
}
.count-btn{
  background: transparent;
  border: none;
  padding: 2rem;
}
.counter{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}
h1{
  text-align: center;
  padding-top: 5rem;
  color: purple;
}
.value-container{
  display: flex;
  flex-direction: column;
}
.value-container input{
  border: 1px solid #35495e;
  outline: none;
  height: 2rem;
  border-radius: .5rem;
  text-align: center;
  color: purple;
  background: transparent;
}
.value-container button{
  height: 2rem;
  /* width: 4rem; */
  margin: 1rem auto 0 auto;
  border-radius: .2rem;
  border: none;
  outline: none;
  color: purple;
  background: transparent;
  font-size: 1.2rem;
}
.value-container button:hover{
  font-size: 1.5rem;
}
@keyframes count-up {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>

