import { message, Modal } from "ant-design-vue";
import { ListGridType } from "ant-design-vue/lib/list";
import api from "ant-design-vue/lib/notification";
import { createVNode, reactive, ref } from "vue";
import { http } from "./http";
import { RAndLogin } from "./register-and-login";

interface model {
  username: string;
  password: string;
  pass: string; //提交时需要把这个删掉
  role: string; //身份，默认是2 User
  state: boolean; //默认是true
}

/**
 *
 * @param url 路由路径
 */
export const Curd = (url: string) => {
  //新增修改用的model
  let model = reactive<model>({
    username: "",
    password: "",
    pass: "", //提交时需要把这个删掉
    role: "2", //身份，默认是2 User
    state: true, //默认是true
  });

  //新增
  let addModel = reactive<model>({
    username: "",
    password: "",
    pass: "", //提交时需要把这个删掉
    role: "2", //身份，默认是2 User
    state: true, //默认是true
  });
  //修改
  let editModel = reactive<model>({
    username: "",
    password: "",
    pass: "", //提交时需要把这个删掉
    role: "2", //身份，默认是2 User
    state: true, //默认是true
  });
  //清空curdModel里面的值
  const resetModel = () => {
    console.log("reset");
    AorE.value = true;
    for (let i in model) {
      editModel[i] = model[i];
      addModel[i] = model[i];
    }
  };

  //查询的id
  let findOneId = ref("");
  //单一查询
  const findOne = async (record: { _id: any }) => {
    const data = await http.get(`${url}/${record._id}`);
    editModel.username = data.username;
    editModel.role = data.role;
    editModel.state = data.state;
    findOneId.value = data._id;
    if (data.state) {
      selectM.value = "true";
    } else {
      selectM.value = "false";
    }
    // console.log(findOneId.value);

    //执行findOne 就会改变editModel的值
  };

  //关闭对话框要把model给去掉
  const cancelModel = () => {
    modalVisible.value.add = false;
    modalVisible.value.edit = false;
    resetModel();
  };

  //对话框展示
  let modalVisible = ref({
    add: false,
    edit: false,
  });

  let selectM = ref();
  //单选框改变时回调函数
  const selectState = () => {
    if (AorE.value) {
      if (selectM.value == "false") {
        addModel.state = false;
      } else {
        addModel.state = true;
      }
    } else {
      if (selectM.value == "false") {
        editModel.state = false;
      } else {
        editModel.state = true;
      }
    }
  };
  //新增和修改用同一个方法，需要用个参数区分
  let AorE = ref(true); //默认add
  const addEdit = async (record?: { _id: any }) => {
    if (AorE.value) {
      console.log("add");
      await http.post(`${url}/add`, addModel);
      resetModel();
      modalVisible.value.add = false;
      message.success("注册成功");
    } else {
      console.log("edit");
      AorE.value = true;
      await http.put(`${url}/${findOneId.value}`, editModel);
      resetModel();
      modalVisible.value.edit = false;
    }
    fetch();
  };
  //

  //分页器
  let pagination = ref({
    total: 10, //数据总数
    current: 1, //当前页面
    pageSize: 5, //数据量
  });

  //展示条件
  let query = ref({
    limit: pagination.value.pageSize, //一页展示多少条,默认0时会全部展示，
    page: 1, //展示页码
    where: ref({}),
    // where: ref(wheres) //展示筛选条件 where 别加s
    // populate: "user", //展示关联表的内容
  });
  /**
   * 换页方法
   * @param page 返回的页数
   */
  const pageChange = (page: any) => {
    query.value.page = page.current;
    pagination.value.current = page.current;
    // console.log("执行pageChange" + pagination.value.current);
    // console.log("执行pageChange" + query.value.page);
    // console.log("执行pageChange" + page.current);
    // console.log(query.value.page);
    fetch();
  };
  let curdData = ref(); //数据

  const fetch = async () => {
    let res = await http.get(`${url}`, {
      params: {
        //展示条件
        query: query.value,
      },
    });
    curdData.value = res.data;
    pagination.value.total = res.total;
    // console.log("fetch");
    // console.log(res.data);
    // console.log(pagination.value.total);
    // console.log(query);
  };

  let disabled = ref(true); //注册确认键是否失效
  //注册用户验证规则
  var passAgain = (rule, value, callback) => {
    if (AorE.value) {
      if (!value) {
        // return Promise.reject(new Error("请输入密码"));
        return Promise.reject("请输入密码");
      } else if (value !== addModel.pass) {
        // return Promise.reject(new Error("两次输入密码不一致!"));
        return Promise.reject("两次输入密码不一致!");
      } else {
        disabled.value = false;
        return Promise.resolve();
      }
    } else {
      if (!value) {
        // return Promise.reject(new Error("请输入密码"));
        return Promise.reject("请输入密码");
      } else if (value !== editModel.password) {
        // return Promise.reject(new Error("两次输入密码不一致!"));
        // console.log(editModel.password);
        // console.log(editModel.pass);
        // console.log(value);

        return Promise.reject("两次输入密码不一致!");
      } else {
        disabled.value = false;
        return Promise.resolve();
      }
    }
  };

  const remove = async (temp) => {
    let id = temp._id;
    Modal.confirm({
      title: "是否确定删除该数据",
      // icon: createVNode(ExclamationCircleOutlined),
      content: "删除后无法恢复",
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      async onOk() {
        console.log("OK");
        await http.delete(`${url}/${id}`);
        message.success("已删除");
        fetch();
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return {
    query, // 展示条件
    fetch, //展示
    curdData, // 表格展示信息
    findOne, //id 找 信息
    AorE, // add or edit 判断
    addEdit, //add or edit 方法
    pagination, //换页器
    pageChange, //页面改变
    modalVisible, //对话框展示
    addModel, //add
    editModel, //edit
    passAgain, //验证规则
    disabled, //按键禁用
    cancelModel, //关闭对话框
    selectM, //选择框
    remove, //删除
    selectState,
  };
};
