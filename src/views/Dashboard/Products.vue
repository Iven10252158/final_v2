<template>
   <div class= "container">
        <h2>後台 產品列表</h2>
    <div class="text-right mt-4">
    <button  class="btn btn-primary" @click="openModal('new')">建立新的產品</button>
    <table class="table mt-4">
        <thead>
            <tr>
              <th>分類</th>
              <th>預覽</th>
              <th>產品名稱</th>
              <th>原價</th>
              <th>售價</th>
              <th>是否啟用</th>
              <th width="120">編輯</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in products" :key="item.id">
              <td>{{ item.category }}</td>
              <td><img :src="item.imageUrl" width="130" height="160" alt=""></td>
              <td>{{ item.title }}</td>
              <td class="text-left">
                {{ item.origin_price }}
              </td>
              <td class="text-left">
                {{ item.price }}
              </td>
              <td>
                <span v-if="item.enabled" class="text-success">啟用</span>
                <span v-else>未啟用</span>
              </td>
              <td>
                <div class="btn-group">
                  <button class="btn btn-outline-primary btn-sm" @click="openModal('edit', item)">
                    編輯
                  </button>
                  <button class="btn btn-outline-danger btn-sm" @click="openModal('delete', item)">
                    刪除
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <pagination :pages="pagination" @emit-pages="getProducts"></pagination>
        <div ref="productModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <modal :products='products' :temp-product='tempProduct' @update='getProducts'></modal>
    </div>
   </div>
   </div>
</template>

<script>
import pagination from '@/components/pagination.vue'
import modal from '@/components/modal.vue'
export default {
  components: {
    pagination,
    modal
  },
  data () {
    return {
      products: [],
      tempProduct: {
        imageUrl: []
      },
      pagination: {},
      token: ''
    }
  },
  methods: {
    getProducts () {
      // API
      const api = `${process.env.VUE_APP_APIPATH}${process.env.VUE_APP_UUID}/admin/ec/products`
      this.token = document.cookie.replace(/(?:(?:^|.*;\s*)weekfourToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
      this.$http.defaults.headers.common.Authorization = `Bearer ${this.token}`
      this.$http.get(api).then((response) => {
        console.log(response)
        this.products = response.data.data
        this.pagination = response.data.meta.pagination
      })
    },
    openModal (isNew, item) {
      switch (isNew) {
        case 'new':
          this.tempProduct = {
            imageUrl: []
          }
          /* eslint-env jquery */
          $(this.$refs.productModal).modal('show')
          break
        case 'edit':
          this.getProducts(item.id)
          break
        case 'delete':
          /* eslint-env jquery */
          $(this.$refs.productModal).modal('show')
          this.tempProduct = Object.assign({}, item)
          break
        default:
          break
      }
    }
  },
  created () {
    this.getProducts()
  }
}
</script>
