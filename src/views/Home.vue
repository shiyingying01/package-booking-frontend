<template>
  <div class="home">
    <parcelStorage/>
    <Reservation/>
  </div>
</template>

<script>
// @ is an alias to /src
import parcelStorage from '../components/parcelStorage.vue'

export default {
  name: 'home',
  components: {
    parcelStorage,
    Reservation
  }
}
</script>
