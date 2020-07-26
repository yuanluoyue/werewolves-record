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
          <!-- <span>{{scope.row.role}}</span> -->
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

      <el-table-column label="操作">
        <!-- <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>-->
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
      playerRoleSelectOptions: []
    }
  },

  computed: {
    ...mapState(['playerList'])
  },

  mounted() {
    this.initPlayerRoleSelectOptions()
  },

  methods: {
    ...mapMutations(['changePlayerRole']),

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

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
}
</script>
  
<style>
</style>

