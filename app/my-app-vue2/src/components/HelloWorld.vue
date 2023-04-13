<template>
  <div class="hello">
    <TestBtn></TestBtn>
  </div>
</template>

<script>
import { TestBtn } from 'vue2-ui';
import { add, divide, minus, multiply, square, mat_add } from 'my-test-utils';
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    TestBtn
  },
  mounted() {
    console.log(add(1, 1));
    console.log(divide(1, 1));
    console.log(minus(1, 1));
    console.log(multiply(1, 1));
    console.log('square（2）:' + square(2));
    const list2d = [
      [1.5, 0],
      [0, 2]
    ];
    const list2d2 = [
      [3, 5],
      [5, 8]
    ];
    const res = mat_add(list2d, list2d2);
    console.log('mat add:' + res.toStr());
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
