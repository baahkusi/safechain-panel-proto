<template>
  <div class="cert-list">
    <h1 style="color: #f56c6c;"> PHARMACIES & HOSPITALS </h1>
    <el-drawer :visible.sync="visible" direction="ltr" size="80%">
      <template slot="title">
        <h1> Pharamacy Details</h1>
      </template>
      <div class="cert-history">
        <h3 style="color: #f56c6c;"> MAJOR PHARMACEUTICALS </h3>
        <el-table :data="drugData" border show-summary style="width: 50%">
          <el-table-column prop="drug_type" label="Drug Type"></el-table-column>
          <el-table-column prop="total" label="# Scanned / Dispensed"></el-table-column>
          <el-table-column>
            <template>
          <el-button type="primary" size="small" @click="$router.push('/drugs/all')" plain>See Details</el-button>
        </template>
          </el-table-column>
        </el-table>
      </div>

      <div></div>
    </el-drawer>

    <el-table :data="currentData" style="width: 100%" max-height="750">
      <el-table-column label="ID">
        <el-table-column label="ID" width="100" prop="id">
          <template slot="header">
            <el-input v-model="idFilter" size="mini" placeholder="Filter by ID..."></el-input>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="Name">
        <el-table-column label="Name" width="200">
          <template slot="header">
            <el-input v-model="nameFilter" size="mini" placeholder="Filter by name..."></el-input>
          </template>
          <template slot-scope="scope">
            <div slot="reference" class="name-wrapper">{{ fineName(scope.row.name) }}</div>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="Date Joined">
        <el-table-column label="Date Joined" prop="date_joined" width="400">
          <template slot="header">
            <el-date-picker
              v-model="dateJoined"
              type="daterange"
              align="right"
              start-placeholder="Start"
              end-placeholder="End"
              default-value="2010-10-01"
              size="mini"
            ></el-date-picker>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="Country">
        <el-table-column label="Country" prop="country" width="120">
          <template slot="header">
            <el-input v-model="cityFilter" size="mini" placeholder="Filter by Serial Country..."></el-input>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="City">
        <el-table-column label="City" prop="city" width="120">
          <template slot="header">
            <el-input v-model="countryFilter" size="mini" placeholder="Filter by Serial City..."></el-input>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="# of Drug Types">
        <el-table-column label="# of Drug Types" prop="drug_types" width="200">
          <template slot="header">
            <el-input v-model="typesFilter" size="mini" placeholder="Filter by # of Drug Types..."></el-input>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column label="# of Drug Scanned">
        <el-table-column label="# of Drug Types" prop="total_scanned" width="200">
          <template slot="header">
            <el-input v-model="totalFilter" size="mini" placeholder="Filter by # of Drug Types..."></el-input>
          </template>
        </el-table-column>
      </el-table-column>

      <el-table-column width="100" fixed="right">
        <template>
          <el-button type="primary" size="small" @click="visible = true" plain>Details</el-button>
        </template>
      </el-table-column>
    </el-table>
    <br />
    <el-pagination
      background
      layout="total, sizes, prev, pager, next, jumper"
      :page-size="size"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
  </div>
</template>

<script>
import CertData from "../data/CertData";

export default {
  data() {
    return {
      tableData: CertData.reverse(),
      drugData: [
        {
          drug_type: "Paracetamol",
          total: "10000"
        },
        {
          drug_type: "Chloroquine",
          total: "2000"
        },
        {
          drug_type: "Aspirin",
          total: "1000"
        },
        {
          drug_type: "Diazepam",
          total: "100"
        }
      ],
      start: 1,
      size: 10,
      idFilter: "",
      nameFilter: "",
      countryFilter: "",
      cityFilter: "",
      totalFilter: "",
      typesFilter: "",
      dateJoined: "",
      visible: false
    };
  },
  computed: {
    currentData() {
      const start = (this.start - 1) * this.size;
      return this.tableData.slice(start, start + this.size);
    }
  },
  methods: {
    handleSizeChange(val) {
      this.size = val;
    },
    handleCurrentChange(val) {
      this.start = val;
    },
    fineName(name) {
      if (name.includes(",")) {
        name = name.split(",").slice(0, 1)[0];
      }

      return name.slice(0, 18);
    },
    filterData() {},
    inputHandler(val) {
      console.log(val);
    }
  }
};
</script>

<style>
.cert-list {
  padding: 15px;
}
.name-wrapper {
  text-transform: uppercase;
}
.cert-history {
  padding: 30px;
}
.cert-history h3 {
  color: #f56c6c;
}

.cert-history p {
  color: #e6a23c;
}

.cert-history a {
  color: #409eff;
  text-decoration: none;
}
.el-drawer__body {
  overflow: scroll;
}
</style>
