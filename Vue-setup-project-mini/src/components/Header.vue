<template>
    <div class="progress">
        <div class="progress-bar progress-bar-striped bg-success" role="progressbar" :style="{ width: (itemCount / maxItems) * 100 + '%' }"></div>
        <span>{{ itemCount }}/{{ maxItems }}</span>
    </div>
</template>

<script>
export default {
    props:{
        itemCount:{
            type: Number
        },
        maxItems:{
            type: Number
        }
    }
}
</script>

<style>

</style>