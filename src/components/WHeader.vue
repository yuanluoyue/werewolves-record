<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-purple">0</div>
    </el-col>
    <el-col :span="4">
      <div class="grid-content bg-purple">0</div>
    </el-col>
    <el-col :offset="8" :span="8">
      <div class="grid-content bg-purple-light">
        <el-select v-model="value" placeholder="人数">
          <el-option
            v-for="item in numOfPlayerSelectOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: '',
  data() {
    return {
      numOfPlayerSelectOptions: [],
      value: ''
    }
  },

  mounted() {
    this.initPlayerSelectOptions()
  },

  methods: {
    initPlayerSelectOptions() {
      const minPlayer = 6
      const maxPlayer = 18
      const options = []
      for (let i = 0; i < maxPlayer - minPlayer + 1; i++) {
        const n = minPlayer + i
        const o = {
          value: n,
          label: n + '人',
        }
        options.push(o)
      }
      this.numOfPlayerSelectOptions = options
    }
  }
}
</script>
  
<style>
</style>

