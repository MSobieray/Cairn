const mutations = {
  CLEAR_STATE: state => {
    state.Projects.projects = [];
    state.Projects.projectData = null;
    state.Teams.teams = [];
    state.Teams.currentTeam = null;
  },
  LOADING: (state, payload) => {
    state.loading = payload;
  }
};

export default mutations;
