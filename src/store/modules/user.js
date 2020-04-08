const state = {
  name:"",
  token:"",
  email:"",
  mobile:"",
  role:[""]
}
const mutations = {
  SET_NAME: (state, username) => {
    state.name = username
  },
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_ROLE: (state, roles) => {
    state.role = roles
  },
  SET_EMAIL: (state, email) => {
    state.email = email
  },
  SET_PHONE: (state, phone) => {
    state.mobile = phone
  }
}
const actions={
    login({commit},userinfo) {
      return new Promise((resolve,reject)=>{
        commit('SET_NAME', userinfo.username);
        commit('SET_TOKEN',userinfo.token);
        commit('SET_ROLE',userinfo.role);
        commit('SET_EMAIL',userinfo.email);
        commit('SET_PHONE',userinfo.mobile);
        resolve();
      }).catch(error => {reject(error)})
    }
}
export default {
  mutations,actions,state
}

