<template>
  <div class="header">
    <h1 class="title">法官笔记</h1>
    <el-row :gutter="6">
      <el-col :span="8" class="desc-situation">
        <span>参与人数: {{currentPlayer}}</span>
        <span>存活人数: {{alivePlayer}}</span>
      </el-col>

      <el-col :span="8" class="desc-situation">
        <span :style="{color:aliveWerewolves?'gray':'red'}">存活狼: {{aliveWerewolves}}</span>
        <span :style="{color:aliveGod?'gray':'red'}">存活神: {{aliveGod}}</span>
        <span :style="{color:aliveVillager?'gray':'red'}">存活民: {{aliveVillager}}</span>
      </el-col>

      <el-col :span="8">
        <div class="player-selecter">
          <el-select v-model="playerNum" @change="handleSelectChange" placeholder="选择人数">
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
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: '',
  data() {
    return {
      numOfPlayerSelectOptions: [],
      playerNum: ''
    }
  },

  computed: {
    ...mapState(['currentPlayer', 'playerList']),

    alivePlayer() {
      const list = this.playerList.filter(i => i.alive)
      return list.length
    },

    aliveWerewolves() {
      const list = this.playerList
        .filter(i => i.alive)
        .filter(i => i.role == '狼人')
      return list.length
    },

    aliveGod() {
      const list = this.playerList
        .filter(i => i.alive)
        .filter(i => i.role != '村民')
        .filter(i => i.role != '狼人')
      return list.length
    },

    aliveVillager() {
      const list = this.playerList
        .filter(i => i.alive)
        .filter(i => i.role == '村民')
      return list.length
    },
  },

  mounted() {
    this.initPlayerSelectOptions()
  },

  methods: {
    ...mapMutations(['changeNumberOfPlayer']),

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
    },

    handleSelectChange() {
      this.changeNumberOfPlayer(this.playerNum)
    }

  }
}
</script>
  
<style>
.header {
  width: 100%;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  background: rgb(217, 236, 255);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

.title {
  margin-top: 0;
  margin-bottom: 5px;
  padding: 0;
  font-size: 20px;
}

.desc-situation > span {
  margin-bottom: 3px;
  display: block;
  font-size: 15px;
  color: gray;
}

.player-selecter {
  margin-right: 8px;
}
</style>

