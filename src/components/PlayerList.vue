<template>
  <div>
    <el-table :data="playerList" style="width: 100%">
      <el-table-column label="编号">
        <template slot-scope="scope">
          <!-- <i class="el-icon-time"></i> -->
          <span>玩家 {{ scope.row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="角色" width="110">
        <template slot-scope="scope">
          <el-select
            :value="scope.row.role"
            @change="handleSelectRole($event, scope.$index, scope.row)"
            placeholder="角色"
          >
            <el-option
              v-for="item in playerRoleSelectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>

      <el-table-column label="存亡">
        <template slot-scope="scope">
          <el-select
            :value="scope.row.alive"
            @change="handleSelectAlive($event, scope.$index, scope.row)"
            placeholder="存亡"
          >
            <el-option
              v-for="item in playerAliveSelectOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: '',

  data() {
    return {
      playerRoleSelectOptions: [],
      playerAliveSelectOptions: [
        {
          value: true,
          label: '存活'
        },
        {
          value: false,
          label: '出局'
        }
      ]
    }
  },

  computed: {
    ...mapState(['playerList'])
  },

  mounted() {
    this.initPlayerRoleSelectOptions()
  },

  methods: {
    ...mapMutations(['changePlayerRole', 'changePlayerAlive']),

    initPlayerRoleSelectOptions() {
      const roleList = ['村民', '狼人', '预言家', '女巫', '猎人', '守卫', '白痴', '禁言长老', '丘比特', '嘟嘟噜']
      roleList.forEach(role => {
        const item = {
          value: role,
          label: role
        }
        this.playerRoleSelectOptions.push(item)
      })
    },

    handleSelectRole(selectTarget, index) {
      const parm = {
        index,
        role: selectTarget
      }
      this.changePlayerRole(parm)
    },

    handleSelectAlive(selectTarget, index) {
      const parm = {
        index,
        role: selectTarget
      }
      this.changePlayerAlive(parm)
    }
  }
}
</script>
  
<style>
</style>

