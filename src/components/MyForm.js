import React from "react";

function MyForm(Comp) {
  return class extends React.Component {
    _refs = {}; //存放DOM节点
    options = {}; //存放选项
    state = {}; //存放表单字段

    handleChange = (e) => {
      let { name, value } = e.target;
      this.setState({ [name]: value }, () => {
        // 校验
        this.validateField(name);
      });
    };
    getFieldDec = (field, option) => {
      console.log("7777", field, option);
      // ....
    };

    validateField = (field) => {
      const rules = this.options[field].rules; //取到对应的配置选项
      const ret = !rules.some((rule) => {
        // 只要有任何一项校验失败就返回true跳出，对返回值取反表示校验失败
        if (rule.required) {
          //当存在必填执行
          if (!this.state[field]) {
            //当检测到为空执行
            this.setState({ [field + "Message"]: rule.message || "此项必填" });
            this._refs[field].current.focus(); //焦点选中验证失败的dom
            return true;
          }
        }
      });
      ret && this.setState({ [field + "Message"]: "" }); //当验证通过清空提示
      return ret; //返回一个验证是否通过的boolean值
    };
    //批量验证表单获取状态
    validateFields = (callback) => {
      //传入一个回调函数
      let values = {}; //声明一个空对象为了排除不必要的一些数据
      const rets = Object.keys(this.options).every((field) => {
        //遍历配置进行验证假如有一项不满足就会返回false
        values[field] = this.state[field]; //我们只需要他的value不需要message
        return this.validateField(field); //执行验证
      });
      callback(rets, values); //将状态和值传给回调函数以便处理逻辑
    };
    render() {
      return (
        <div>
          <Comp
            {...this.props}
            getFieldDec={this.getFieldDec}
            validateFields={this.validateFields}
          />{" "}
          //挂载validateFields
        </div>
      );
    }
  };
}

export default MyForm;
