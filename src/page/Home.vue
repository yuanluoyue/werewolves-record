<template>
  <el-container>
    <el-header>
      <w-header />
    </el-header>
    <el-main>
      <player-list />
    </el-main>
    <p class="desc">生命不应该如此卑微，我真的有权力去裁决别人的生命吗?</p>
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
  padding: 0px;
  position: fixed;
  width: 100%;
  z-index: 10;
}
.el-main {
  margin-top: 80px;
}
.desc {
  font-size: 12px;
  color: gray;
}
</style>

