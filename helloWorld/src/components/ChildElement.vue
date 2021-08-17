<template>
    <div>
        <div class="child">
            <button @click="yeucaubatdenxanh">bật đèn nhà xanh</button>
            <hr>
            <h1>{{ thuoctinh_dotat }}</h1>
            <hr>
            <h1>{{ thuoctinh_xanhtat }}</h1>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        thuoctinh_dotat:{
            type: String
        },
        thuoctinh_xanhtat:{
            type: String
        }
    },
    methods:{
        yeucaubatdenxanh(){
            console.log('trước khi kích hoạt')
            this.$emit('hamxulixukien_batdenxanh')
            console.log('sau khi kích hoạt')
        }
    }
}
</script>

<style scoped>
.child{
    width: 300px;
    height: 300px;
    background-color: rgb(255, 8, 0);
}
</style>