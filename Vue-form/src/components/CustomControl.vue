<template>
  <div class="on_off">
      <div class="on"
      :class="{active_on: value}"
      @click="switched(true)"
      >On</div>

      <div class="off"
      :class="{active_off: !value}"
      @click="switched(false)"
      >Off</div>
  </div>
</template>

<script>
export default {
  props:['value'],
  methods:{
    switched(isOn){
      this.$emit('oninput', isOn)
    }
  }
}
</script>

<style scoped>
.on_off{
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  font-weight: 500;
}

.on{
  background-color: rgb(83, 83, 83);
  padding: 10px 20px;
  cursor: pointer;
}

.off{
  background-color: rgb(83, 83, 83);
  padding: 10px 20px;
  cursor: pointer;
}

.active_on{
  background-color: rgba(0, 197, 20, 0.8);
}

.active_off{
  background-color: rgba(255, 0, 0, 0.8);
}
</style>