<template>
<div id="components-table-demo-size">
<h2>首页</h2>
<a-table :columns="columns" :dataSource="data" size="middle" />
</div>
</template>
<script>
const columns = [
{
title: "运单号",
dataIndex: "id"
},
{
title: "收件人",
dataIndex: "receiver"
},
{
title: "电话",
dataIndex: "phone"
},
{
title: "状态",
dataIndex: "status"
},
{
title: "预约时间",
dataIndex: "getTime"
},
];
const data = [];

export default {
data() {
return {
   data: this.$store.getters.getMsg,
columns
};
}
};
</script>
<style>
#components-table-demo-size h4 {
margin-bottom: 16px;
}
</style>