const getters = {
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    sidebar: state => state.app.sidebar
}

export default getters;