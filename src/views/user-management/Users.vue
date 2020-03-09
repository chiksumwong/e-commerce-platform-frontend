<template>
    <div>
        <div style="margin-bottom: 10px;">
            <el-button @click="exportAll" style="margin-right: 10px;">export all</el-button>
            <el-button @click="exportFiltered">export filtered</el-button>

            <el-input style="width: 200px; margin-left: 20px;" v-model="filters[0].value"></el-input>
        </div>

        <data-tables :data="data" :filters="filters" @filtered-data="handleFilteredData">
            <el-table-column v-for="title in titles" :prop="title.prop" :label="title.label" :key="title.label">
            </el-table-column>
        </data-tables>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                data: [{
                    "content": "Water flood",
                    "flow_no": "FW201601010001",
                    "flow_type": "Repair",
                    "flow_type_code": "repair",
                    }, {
                    "content": "Lock broken",
                    "flow_no": "FW201601010002",
                    "flow_type": "Repair",
                    "flow_type_code": "repair",
                    }, {
                    "content": "Help to buy some drinks",
                    "flow_no": "FW201601010003",
                    "flow_type": "Help",
                    "flow_type_code": "help"
                }],
                titles: [{
                    prop: "flow_no",
                    label: "NO."
                    }, {
                    prop: "content",
                    label: "Content"
                    }, {
                    prop: "flow_type",
                    label: "Type"
                }],
                filters: [{
                    value: ''
                }],
                filteredData: [],
                columns: ['flow_no', 'content', 'flow_type'],
                columnNames: ['Flow NO.', 'Content', 'type']
            }
        },
        methods: {
            CsvExport (data, fields, fieldNames, fileName) {
                try {
                    var result = json2csv({
                        data: data,
                        fields: fields,
                        fieldNames: fieldNames
                    })
                    var csvContent = 'data:text/csvcharset=GBK,\uFEFF' + result
                    var encodedUri = encodeURI(csvContent)
                    var link = document.createElement('a')
                    link.setAttribute('href', encodedUri)
                    link.setAttribute('download', `${(fileName || 'file')}.csv`)
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                } catch (err) {
                    console.error(err)
                }
            },
            exportAll() {
                this.CsvExport(this.data, this.columns, this.columnNames, 'all')
            },
            exportFiltered() {
                this.CsvExport(this.filteredData, this.columns, this.columnNames, 'filtered')
            },
            handleFilteredData(filteredData) {
                this.filteredData = filteredData
            }
        }
    }
</script>