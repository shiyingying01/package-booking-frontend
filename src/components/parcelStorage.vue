<template>
  <div class="parcelStorage">
    <div>
      <h2>包裹入库</h2>
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
        <a-form-item label="收件人" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'receiver',
          {rules: [{ required: true, message: '请输入收件人!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="电话" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'phone',
          {rules: [{ required: true, message: '请输入电话!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item label="重量" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input
            v-decorator="[
          'weight',
          {rules: [{ required: true, message: '请输入重量!' }]}
        ]"
          />
        </a-form-item>
        <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
          <a-button type="primary" html-type="submit">提交</a-button>
        </a-form-item>
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
            this.$store.dispatch("add",values)
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>

