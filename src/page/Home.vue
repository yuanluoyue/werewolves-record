<template>
  <el-container>
    <el-header>
      <w-header />
    </el-header>
    <el-main>Main</el-main>
  </el-container>
</template>

<script>
import WHeader from '../components/WHeader'
export default {
  name: 'HomePage',
  components: {
    'w-header': WHeader
  }
}
</script>
  
<style>
.el-header {
  position: relative;
  width: 100%;
  height: 60px;
}
</style>

