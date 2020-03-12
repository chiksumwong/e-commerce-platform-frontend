<template>
    <div>
        <b-container>
            <br>
            
            <download-excel :data="excel_json_data" :fields="excel_json_fields" name="users.xls">
                <el-button type="success" @click="exportExcel()"> Download Excel </el-button>
            </download-excel>

            <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="Creation Date" width="180">
                </el-table-column>
                <el-table-column prop="name" label="Name" width="180">
                </el-table-column>
                <el-table-column prop="email" label="Email">
                </el-table-column>
            </el-table>

        </b-container>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tableData: [{
                    date: '2019-05-02',
                    name: 'Sam',
                    email: 'sam@example.com'
                }, {
                    date: '2019-05-02',
                    name: 'Jack',
                    email: 'jack@example.com'
                }, ],

                excel_json_fields: {
                    'Creation Date': 'date',
                    'User Name': 'name',
                    'Email': 'email'
                },
                excel_json_data: []
            }
        },
        methods: {
            exportExcel(){
                this.excel_json_data = this.tableData
            }
        }
        
}
</script>

<style scoped>
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video,
    button {
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }
</style>