<template>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item" :class="{'disabled': pages.current_page === 1}"><a class="page-link" href="#" @click.prevent="emitPages(pages.current_page - 1)">Previous</a></li>
    <li class="page-item" v-for="i in pages.total_pages" :key="i" :class="{'active': pages.current_page === i}"><a class="page-link" href="#" @click.prevent="emitPages(i)">{{i}}</a></li>
    <li class="page-item" :class="{'disabled': pages.current_page === pages.total_pages}"><a class="page-link" href="#" @click.prevent="emitPages(pages.current_page + 1)">Next</a></li>
  </ul>
</nav>
</template>

<script>
export default {
  name: 'pagination',
  props: ['pages'],
  methods: {
    emitPages (i) {
      this.$emit('emit-pages', i)
    }
  }
}
</script>
