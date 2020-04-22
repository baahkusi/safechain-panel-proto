<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="24" :lg="16">
        <el-card shadow="always">
          <h3 style="color: #f56c6c;">DRUG TYPES</h3>
          <el-table :data="drugData" border style="width: 100%">
            <el-table-column prop="drug_type" label="Drug Type"></el-table-column>
            <el-table-column prop="total_registered" label="Total # Registered"></el-table-column>
            <el-table-column prop="total_scanned" label="Total # Scanned"></el-table-column>
            <el-table-column prop="not_scanned" label="Not yet Scanned"></el-table-column>
            <el-table-column>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  @click="$router.push('/drugs/all')"
                  plain
                >See Details</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="4">
        <el-card shadow="always">
          <b style="color:#F56C6C">Registered Drugs</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266 ">207, 000</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="4">
        <el-card shadow="always">
          <b style="color:#67C23A">Drugs Scanned</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266 ">179, 070</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="4">
        <el-card shadow="always">
          <b style="color:#E6A23C">Drugs Not yet Scanned</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266">27, 930</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="6" :lg="8" :xl="4">
        <el-card shadow="always">
          <b style="color:#E6A23C">Scan Rate</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266">5</b>
          <i color="#909399">scans per drug</i>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20" style="margin-top:50px">
      <el-col :span="24">
        <el-card shadow="always">
          <h3 style="color: #f56c6c;">DRUG USAGE IN VARIOUS REGIONS</h3>
          <el-table :data="countryUsage" border style="width: 100%">
            <el-table-column prop="drug_type" label="Drug Type"></el-table-column>
            <el-table-column label="Togo">
              <template slot-scope="scope">
                <div slot="reference" class="name-wrapper">{{ scope.row.togo }}</div>
              </template>
            </el-table-column>
            <el-table-column prop="ivory" label="Ivory Coast"></el-table-column>
            <el-table-column prop="bennin" label="Bennin"></el-table-column>
            <el-table-column prop="senegal" label="Senegal"></el-table-column>
            <el-table-column prop="cameroon" label="Cameroon"></el-table-column>
            <el-table-column>
              <template>
                <el-button
                  type="primary"
                  size="small"
                  @click="$router.push('/drugs/all')"
                  plain
                >See Details</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-card shadow="always" style="margin-top: 50px">
    <el-row :gutter="20">
      <h1 style="color: #f56c6c ;margin-left: 15px;">TOTAL DRUG USAGE FOR EACH REGION</h1>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card shadow="always">
          <b style="color:#909399">TOGO</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266 ">1, 102, 868</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card shadow="always">
          <b style="color:#909399">IVORY COAST</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266 ">179, 070</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card shadow="always">
          <b style="color:#909399">BENNIN</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266">27, 930</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card shadow="always">
          <b style="color:#909399">SENEGAL</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266">27, 930</b>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="12" :md="8" :lg="6" :xl="4">
        <el-card shadow="always">
          <b style="color:#909399">CAMEROON</b>
          <br />
          <br />
          <b style="font-size: 40px; color:#606266">27, 930</b>
        </el-card>
      </el-col>
    </el-row>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drugData: [
        {
          drug_type: "Paracetamol",
          total_registered: "155, 000",
          total_scanned: "134, 000",
          not_scanned: "21, 000"
        },
        {
          drug_type: "Chloroquine",
          total_registered: "30, 000",
          total_scanned: "25, 600",
          not_scanned: "4, 400"
        },
        {
          drug_type: "Aspirin",
          total_registered: "20, 000",
          total_scanned: "17, 800",
          not_scanned: "3, 000"
        },
        {
          drug_type: "Diazepam",
          total_registered: "2, 000",
          total_scanned: "1, 670",
          not_scanned: "430"
        }
      ],
      countryUsage: [
        {
          drug_type: "Paracetamol",
          togo: "155, 000",
          ivory: "34, 543",
          bennin: "345",
          senegal: "345",
          cameroon: "34, 5345"
        },
        {
          drug_type: "Chloroquine",
          togo: "3, 455",
          ivory: "5, 546",
          bennin: "7, 765",
          senegal: "3, 454",
          cameroon: "5, 6756"
        },
        {
          drug_type: "Aspirin",
          togo: "76, 546",
          ivory: "6, 456",
          bennin: "464",
          senegal: "9, 789",
          cameroon: "3, 455, 654"
        },
        {
          drug_type: "Diazepam",
          togo: "867, 867",
          ivory: "575, 678",
          bennin: "98, 786",
          senegal: "765",
          cameroon: "964, 653"
        }
      ]
    };
  }
};
</script>

<style>
.el-col {
  margin-top: 15px
}
</style>
