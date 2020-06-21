<template>
  <div class="hello">
    <div>
      <ul>
        <li><router-link to="/update">Update Page</router-link></li>
        <li><router-link to="/login">Login Page</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
