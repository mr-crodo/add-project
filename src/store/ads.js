export default {
    state: {
        ads: [
            {
                title: 'First ad',
                description: 'Hello qadan alim',
                promo: false,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                id: '1234'
            },
            {
                title: 'Second ad',
                description: 'Hello brother',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
                id: '123'
            },
            {
                title: 'Third ad',
                description: 'Hello qashkay',
                promo: true,
                imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
                id: '12345'
            }
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        }
    },
    actions: {
        createAd ({commit}, payload) {
            payload.id = 'ddadsdsd'

            commit('createAd', payload)
        }
    },
    getters: {
        ads (state) {
            return state.ads
        },
        promoAds (state) {
            return state.ads.filter(ad => {
                return ad.promo === true // == true mojno ne pisat
            })
        },
        myAds (state) {
            return state.ads
        },
        adById (state) {
            return adId => {
                return state.ads.find((ad => ad.id === adId))
            }
        }
    }
}