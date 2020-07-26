<template>
  <el-container>
    <el-header>
      <w-header />
    </el-header>
    <el-main>
      <player-list />
    </el-main>
  </el-container>
</template>

<script>
import WHeader from '../components/WHeader'
import PlayerList from '../components/PlayerList'

export default {
  name: 'HomePage',
  components: {
    'w-header': WHeader,
    'player-list': PlayerList
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

