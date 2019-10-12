<template>
  <b-container id="index">
    <b-form @submit.prevent="onSubmit">
      <h1>Create New Article</h1>
      <b-form-group>
          <b-form-input
            id="title"
            v-model="article.title"
            type="text"
            size="lg"
            required
            placeholder="Title of Article"
          ></b-form-input>
      </b-form-group>
      <b-form-group>
          <b-form-textarea
            id="content"
            v-model="article.content"
            rows="3"
            required
            placeholder="Content of Article"
          ></b-form-textarea>
      </b-form-group>
      <b-button type="submit" variant="primary">OK</b-button>
    </b-form>
    <h1 class="mt-3">My Articles</h1>
    <b-card v-if="!articles.length">
      <b-card-text class="text-center">
        Empty Now!!!<br/>Let's add some new article
      </b-card-text>
    </b-card>
    <b-card v-for="(a,i) in articles" :key="i" class="mb-2">
        <b-card-title>
          {{a.title}}
          <b-link class="card-link float-right" @click="onDelete(i)">×</b-link>
        </b-card-title>
        <b-card-text>
          {{a.content}}
        </b-card-text>
    </b-card>
  </b-container>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      article: {
        title: '',
        content: ''
      },
      articles: []
    }
  },
  methods: {
    onSubmit () {
      let data = Object.assign({}, this.article)
      this.$store.dispatch('addArticle', data).then(() => {
        this.articles.unshift(data)
        this.article = {
          title: '',
          content: ''
        }
      })
      // this.articles.unshift(data)
    },
    onDelete (index) {
      this.$store.dispatch('deleteArticle', index).then(() => {
        this.articles.splice(index, 1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    form {
        padding: 24px;
        border-radius: 5px;
        background: rgba(0,0,0,.1);
        h1{
            font-size: 24px;
            margin-bottom: 15px;
        }
        button{
            margin-right: 0;
            margin-left: auto;
            display: block;
            width: 100px;
        }
    }
</style>
