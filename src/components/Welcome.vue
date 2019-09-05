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
const data = [
{
key: "1",
name: "John Brown",
age: 32,
address: "New York No. 1 Lake Park"
},
{
key: "2",
name: "Jim Green",
age: 42,
address: "London No. 1 Lake Park"
},
{
key: "3",
name: "Joe Black",
age: 32,
address: "Sidney No. 1 Lake Park"
}
];

export default {
data() {
return {
data,
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