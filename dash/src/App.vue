<template>
  <div id="app">
    <el-container :style="{height:height+'px', border: '1px solid #eee'}">
      <el-aside width="300px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '2', '3', '4']" router>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-order"></i> Drugs
            </template>
              <el-menu-item index="/drugs">Summary</el-menu-item>
              <el-menu-item index="/drugs/all">Detailed</el-menu-item>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-s-home"></i> Certifiers (Labs & Factories)
            </template>
              <el-menu-item index="/certifiers">Summary</el-menu-item>
              <el-menu-item index="/certifiers/all">Detailed</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-success"></i> Pharamcies & Hospitals
            </template>
              <el-menu-item index="/pharmacies">Summary</el-menu-item>
              <el-menu-item index="/pharmacies/all">Detailed</el-menu-item>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-custom"></i> End Users
            </template>
              <el-menu-item index="/users">Summary</el-menu-item>
              <!-- <el-menu-item index="/users/all">Detailed</el-menu-item> -->
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>Profile</el-dropdown-item>
              <el-dropdown-item>Logout</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>Welcome</span>
        </el-header>

        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "Tom",
      address: "No. 189, Grove St, Los Angeles"
    };
    return {
      tableData: Array(20).fill(item)
    };
  },
  computed:{
    height(){
      return window.innerHeight - 20;
    }
  }
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
  /* position: fixed; */
}
</style>
