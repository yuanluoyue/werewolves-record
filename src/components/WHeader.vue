<template>
  <el-row :gutter="6">
    <el-col :span="6">
      <div class="grid-content bg-purple">嘟嘟噜</div>
    </el-col>

    <el-col :span="4">
      <div>{{currentPlayer}}</div>
    </el-col>

    <el-col :offset="2" :span="8">
      <div class="grid-content bg-purple-light">
        <el-select v-model="currentPlayer" placeholder="人数">
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
      currentPlayer: 0
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

