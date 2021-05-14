const state = {
};

const getters = {
    isMobile() {
        return window.navigator.userAgent.toLowerCase().includes("mobi")
    },
    screenViewport() {
        if (typeof window.visualViewport === 'object') {
            if (window.visualViewport) {
                if (typeof window.visualViewport.width !== 'undefined') {
                    return window.visualViewport.width
                }
            }
        }

        return window.innerWidth
    },
    isMobileVersion(state, getters) {
        return !getters.isMobile && getters.screenViewport < 764
    },
};

const mutations = {
};

const actions = {
};

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};
