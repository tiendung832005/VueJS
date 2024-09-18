<template>
    <div class="box">
        
        <p class="img">Image</p>
        <p class="title">Title</p>
        <button class="btn">Add to Cart</button>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .box{
        margin-left: 100px;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 200px; 
        border: solid 1px #ccc;
        border-radius: 5px;
    }
    .img{ 
        text-align: center;
        background: gray;
        height: 80px;  
        top: 20px;
    }
    .title{
        
        margin-top: 10px;
        text-align: center;
        font-size: 18px;
    }
    .btn{
        border-radius: 4px;
        margin-top: 10px;
        text-align: center;
        background-color: #ccc;
        font-size: 18px;
        width: 160px;
        margin-left: 20px;
    }
</style>