<template>
  <div id="app">
    <form>
      <label>Enter your blog post title: </label>
        <input type="text" v-model="title">
        <br>
        <label>Enter your name here: </label>
        <input type="text" v-model="author">
        <br>
        <label>Enter your blog post here: </label>
        <input type="text" v-model="post">
        <br>
    </form>
    <app-blog v-bind:author="author" v-bind:post="post" v-bind:title="title"></app-blog>
  </div>
</template>

<script>
import Blog from "./components/Blog.vue"

export default {
  name: 'app',
  data () {
    return {
      title: "",
      author: "",
      post: ""
    }
  },
  components: {
    appBlog: Blog
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
