<template>
  <div class="container mb-5">
    <div class="row justify-content-md-center">
        <div class="col-xs-12 col-sm-8 col-md-6 text-center">
            <select v-model="typeAnimation" class="form-control">
                <option value="fade">fade</option>
                <option value="slide">slide</option>
            </select>
            <button 
            class="btn btn-success mb-5"
            @click="isShow = !isShow"
            >Ẩn/Hiện Transitions</button>
            <transition :name="typeAnimation">
                <div v-if="isShow" class="alert alert-success mt-3">Hiện thành công</div>
            </transition>
            <transition name="slide">
                <div v-if="isShow" class="alert alert-success mt-3">Hiện thành công</div>
            </transition>
            <transition
            appear
            enter-class=""
            enter-active-class="animate__animated animate__bounce"
            leave-class=""
            leave-active-class="animate__animated animate__bounce"
            >
                <div v-if="isShow" class="alert alert-success mt-3 mb-5">Hiện thành công</div>
            </transition>
            <h1 class="animate__animated animate__rubberBand">An animated element</h1>
            <button class="btn btn-success btn-block" @click="status = !status">Hiện</button>
            <transition
                @before-enter="beforeEnter"
                @enter="enter"
                @afterEnter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
            >
                <div v-if="status">An animated element</div>
            </transition>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            isShow: false,
            typeAnimation: 'fade',
            status: false
        }
    },
    methods:{
        beforeEnter(el){
            console.log('beforeEnter')
        },
        enter(el, done){
            console.log('enter')
            done()
        },
        afterEnter(el){
            console.log('afterEnter')
        },
        enterCancelled(el){
            console.log('enterCancelled')
        },
        beforeLeave(el){
            console.log('beforeLeave')
        },
        leave(el){
            console.log('leave')
        },
        afterLeave(el){
            console.log('afterLeave')
        },
        leaveCancelled(el){
            console.log('leaveCancelled')
        }
    }
}
</script>

<style scoped>
.container{
    height: 500px !important;
}

.fade-enter{
    opacity: 0;
}

.fade-enter-active{
    transition: opacity 1s;
}

.fade-leave{

}

.fade-leave-active{
    transition: opacity 1s;
    opacity: 0;
}

.slide-enter{

}

.slide-enter-active{
    animation: slideIn 1s ease-out forwards;
}

.slide-leave-active{

}

.slide-leave-active{
    animation: slideOut 1s ease-out forwards;
}

@keyframes slideIn {
    from{
        transform: translateY(20px);
        opacity: 0;
    }
    to{
        transform: translateY(0);
        opacity: 1;
    }
}

@keyframes slideOut {
    from{
        transform: translateY(0);
        opacity: 1;
    }
    to{
        transform: translateY(20px);
        opacity: 0;
    }
}
</style>