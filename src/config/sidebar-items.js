export default [{
  meta:{
    title: '当前登入信息',
    icon: ''
  },
  path: '/home',
  index: '',
  },
  {
    meta:{
      title: '进行中事项',
      icon: '',
    },
  path: '/loginUser',
  index: '2',
  children: [{
      meta:{
        title: '才开始事件',
        icon: 'el-icon-menu',
      },
    path: '/startEvent',
    index: '2-1',
  },{
    meta:{
      title: '即将完成事件',
      icon: 'el-icon-menu',
    },
    path: '/finishEvent',
    index: '2-2',
  }]
  },
  {
    meta:{
      title: '代办事项',
      icon: '',
    },
    path: '/loginuser',
    index: '3',
  },
  {
    meta:{
      title: '审核事项',
      icon: '',
    },
    path: '/loginuser',
    index: '4',
  },
  {
    meta:{
      title: '人员列表',
      icon: '',
    },
    path: '/userList',
    index: '5',
  },
  {
    meta:{
      title: '权限修改',
      icon: '',
    },
    path: '/hello',
    index: '6',
  },]
