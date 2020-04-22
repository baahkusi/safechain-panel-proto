<template>
  <div class="drug-list">
    <h1 style="color: #f56c6c;"> DRUGS </h1>
    <el-drawer :visible.sync="visible" direction="ltr" size="80%">
      <template slot="title">
        <h1>Drug History</h1>
      </template>
        <div class="drug-history">
          <el-timeline>
            <el-timeline-item timestamp="20/03/2019" placement="top" icon="el-icon-s-home" type="success" size="large">
              <el-card>
                <h3 class="drug-history-title">Drug was added to database by Watson Pharma, Inc.</h3>
                <h4>Exact time was 8:59 AM</h4>
                <p>Paris, France</p>
                <a href="https://www.google.com/maps" target="_blank">link to google maps</a>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="21/06/2019" placement="top" icon="el-icon-success" type="success" size="large">
              <el-card>
                <h3 class="drug-history-title">Drug was scanned for verification by Doula Pharma.</h3>
                <h4>Exact time was 12:32 PM</h4>
                <p>Doula, Cameroon</p>
                <a href="https://www.google.com/maps" target="_blank">link to google maps</a>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/12" placement="top" icon="el-icon-success" type="success" size="large">
              <el-card>
                <h3 class="drug-history-title">Drug was scanned for verification by Doula Hospital.</h3>
                <h4>Exact time was 9:00 AM</h4>
                <p>Doula, Cameroon</p>
                <a href="https://www.google.com/maps" target="_blank">link to google maps</a>
              </el-card>
            </el-timeline-item>
            <el-timeline-item timestamp="2018/4/12" placement="top" icon="el-icon-s-custom" type="success" size="large">
              <el-card>
                <h3 class="drug-history-title">Drug was added to database by End User</h3>
                <h4>Exact time was 8:59 AM</h4>
                <p>Doula, Cameroon</p>
                <a href="https://www.google.com/maps" target="_blank">link to google maps</a>
              </el-card>
            </el-timeline-item>
          </el-timeline>
        </div>
      
      <div></div>
    </el-drawer>

    <el-table :data="currentData" style="width: 100%" max-height="700">

      <el-table-column>
        <el-table-column label="ID">
        <el-table-column label="ID" width="100" type="index" :index="indexHere">
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
      </el-table-column>

      <el-table-column label="Drug Details">
        <el-table-column label="EAN Code">
          <el-table-column label="EAN Code" prop="ean_code" width="120">
            <template slot="header">
              <el-input v-model="codeFilter" size="mini" placeholder="Filter by EAN code..."></el-input>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="Expiry Date">
          <el-table-column label="Expiry Date" prop="expiry_date" width="400">
            <template slot="header">
              <el-date-picker
                v-model="expiryDate"
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

        <el-table-column label="Serial Number">
          <el-table-column label="Serial Number" prop="serial_number" width="120">
            <template slot="header">
              <el-input v-model="serialFilter" size="mini" placeholder="Filter by Serial Number..."></el-input>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="Manufacturing Company" prop="company_of_manufacture">
          <el-table-column label="Manufacturing Company" prop="company_of_manufacture" width="400">
            <template slot="header">
              <el-input v-model="companyFilter" size="mini" placeholder="Filter by Manufacturer..."></el-input>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="Country">
          <el-table-column label="Country" prop="country_of_manufacture" width="100">
            <template slot="header">
              <el-input
                v-model="countryFilter"
                size="mini"
                placeholder="Filter by Serial Country..."
              ></el-input>
            </template>
          </el-table-column>
        </el-table-column>

        <el-table-column label="Date Added">
          <el-table-column label="Date Added" prop="date_added" width="400">
            <template slot="header">
              <el-date-picker
                v-model="addedDate"
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

        <el-table-column label="# of Scans">
          <el-table-column label="# of Scans" prop="verifies_count" width="100">
            <template slot="header">
              <el-input v-model="scanFilter" size="mini" placeholder="Filter by Scan..."></el-input>
            </template>
          </el-table-column>
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
import DrugData from "../data/DrugData";

export default {
  data() {
    return {
      tableData: DrugData,
      start: 1,
      size: 100,
      idFilter: "",
      nameFilter: "",
      countryFilter: "",
      scanFilter: "",
      codeFilter: "",
      companyFilter: "",
      serialFilter: "",
      expiryDate: "",
      addedDate: "",
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
    },
    indexHere(index){
      const start = (this.start - 1) * this.size;
      return start+ index + 1;
    }
  }
};
</script>

<style>
.drug-list {
  padding: 15px;
}
.name-wrapper {
  text-transform: uppercase;
}
.drug-history {
  padding: 30px;
}
.drug-history h3{
  color: #F56C6C
}

.drug-history p{
  color: #E6A23C
}

.drug-history a{
  color: #409EFF;
  text-decoration: none;
}
.el-drawer__body {
    overflow: scroll;
}
</style>
