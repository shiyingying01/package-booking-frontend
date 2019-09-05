<template>
  <div>
    <div>
      <h2>预约取件</h2>
    </div>
    <div>
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item label="运单号" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'id',
          {rules: [{ required: true, message: '请输入运单号!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="取件时间" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'getTime',
          {rules: [{ required: true, message: '请输入取件时间!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <div>
            <a-button type="primary" html-type="submit">预约</a-button>&ensp;&ensp;
            <a-button type="primary" html-type="cancel" @click="handleCancel">取消</a-button>
          </div>
        </a-form-item>
        <!-- <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="cancel">取消</a-button>
        </a-form-item>-->
      </a-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "parcelStorage",
  data() {
    return {
      formLayout: "horizontal",
      form: this.$form.createForm(this)
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          this.$store.dispatch("updateTime", values);
          console.log("Received values of form: ", values);
        }
      });
    },
    handleCancel(e) {
          this.form.resetFields();
    }
  }
};
</script>

