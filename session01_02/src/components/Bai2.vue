<template>
  <div class="box">
    <h1>Bài 2</h1>
    <h2 class="red">Box</h2>
    <h2 class="green">Box</h2>
    <h2 class="blue">Box</h2>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.box{
    display: flex;
    gap: 20px;
}
.red{
    width: 200px;
    height: 200px;
    background-color: red;
    text-align: center;
}
.green{
    width: 200px;
    height: 200px;
    background-color: green;
    text-align: center;

}
.blue{
    width: 200px;
    height: 200px;
    background-color: blue;
    text-align: center;

}
</style>