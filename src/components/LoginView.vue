<template>
  <div>
    <div>
      <input type="text"
             @keypress.enter="addToList"
             v-model.trim="name">
      <button type="button"
              @click="addToList">Add name on list</button>
    </div>

    <router-link to="/">Back</router-link>

    <div class="container-txt">
      <ul>
        <li :key="name" v-for="(name, index) in list">{{index+1}}. {{ name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "LoginView",
        data() {
            return {
                name: '',
                list: this.$store.getters["nameListModule/getNameListGetter"],
            }
        },
        methods: {
            addToList: function () {
                this.$store.dispatch('nameListModule/addNameToListAction', this.name)
                this.list = this.$store.getters["nameListModule/getNameListGetter"]
                this.name = ''
            }
        }
    }
</script>

<style scoped>
  .container-txt{
    position: relative;
    display: flex;
    justify-content: center;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: block;
    margin: 0 10px;
    text-align: left;
  }
</style>