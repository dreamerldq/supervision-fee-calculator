<template>
  <div>
    <p class="card">
      {{title}}
    </p>
  </div>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
.card {
  padding: 10px;
}
</style>
