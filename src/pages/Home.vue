<template>
  <div class="container">
    <vue-waterfall-easy :imgsArr="renderList" @scrollReachBottom="renderPic"></vue-waterfall-easy>
  </div>
</template>

<script>

import Photo from '@/api/photo';
import vueWaterfallEasy from 'vue-waterfall-easy';

export default {
  data() {
    return {
      loading: false,
      imgList: [],
      renderList: [],
      pageNumber: 0,
      pageSize: 20,
    };
  },
  components: {
    vueWaterfallEasy,
  },
  methods: {
    async loadList() {
      this.loading = true;
      const res = await Photo.getLifeList({});
      this.loading = false;
      const tmpList = res.data;
      if (tmpList && tmpList.length) {
        tmpList.forEach((item) => {
          this.imgList.push({ src: `http://www.kwepvbn.com/files/photos/life/${item}` });
        });
        console.log(this.imgList.length);
        this.renderPic();
      }
    },
    renderPic() {
      for (let i = this.pageSize * this.pageNumber; i < (this.pageSize * this.pageNumber) + this.pageSize && i < this.imgList.length; i += 1) {
        this.renderList.push(this.imgList[i]);
      }
      this.pageNumber = this.pageNumber + 1;
      console.log(this.renderList.length);
    },
  },
  beforeMount() {
    this.loadList();
  },
};
</script>

<style scoped>
  .container {
    width: 100%;
    height: 100%;
  }
</style>

