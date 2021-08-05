import database from "firebase";

class Ad {
    constructor(title, vendor, color, material, price, description, ownerId, imageSrc = '', promo = false, id = null) {
        this.title = title
        this.vendor = vendor
        this.color = color
        this.material = material
        this.price = price
        this.description = description
        this.ownerId = ownerId
        this.imageSrc = imageSrc
        this.promo = promo
        this.id = id
    }
}

export default {
    state: {
        ads: [{
                id: '1',
                title: 'Lenovo Legion Y520',
                vendor: 'Lenovo',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 760,
                promo: false,
                stock: false,
                imageSrc: 'https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg',
            },
            {
                id: '2',
                title: 'Asus FX503VD',
                vendor: 'Asus',
                color: 'white',
                material: 'plastic',
                description: 'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 984,
                promo: true,
                stock: true,
                imageSrc: 'https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg',
            },
            {
                id: '3',
                title: 'ASUS TUF Gaming FX504GD',
                vendor: 'Asus',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
                price: 1220,
                promo: true,
                stock: true,
                imageSrc: 'https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg',
            },
            {
                id: '4',
                title: 'HP Omen 17',
                vendor: 'Hp',
                color: 'black',
                material: 'metal/plastic',
                description: 'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1600,
                promo: false,
                stock: false,
                imageSrc: 'https://image.ibb.co/g6czu8/HP_Omen_17.jpg',
            },
            {
                id: '5',
                title: 'Acer Swift 5 SF514',
                vendor: 'Acer',
                color: 'gold',
                material: 'metal',
                description: 'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
                price: 1100,
                promo: true,
                stock: true,
                imageSrc: 'https://image.ibb.co/mrOsgo/Acer_Swift_5.jpg'
            },
            {
                id: '6',
                title: 'Apple MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'aluminum',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD nou/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                stock: true,
                imageSrc: 'https://image.ibb.co/fxDsgo/Apple_macbook.jpg'
            },
            {
                id: '7',
                title: 'MacBook Pro 16" Laptop',
                vendor: 'Apple',
                color: 'silver',
                material: 'aluminum',
                description: 'Intel Core i9 4200 MHz/12"/2304x1440/16Gb/2TB SSD/DVD nou/AMD Radeon Pro 5500M 8GB /Wi-Fi/Bluetooth/MacOS X',
                price: 6220,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/9gPY425/kisspng-macbook-pro-15-4-inch-macbook-air-laptop-apple-notebook-vector-elements-5a8b1f10b5ec49-22658.png'
            },
            {
                id: '8',
                title: 'HP Pavilion G-7',
                vendor: 'PH',
                color: 'black',
                material: 'plastic',
                description: 'Intel Core i5 1800 MHz/15"/1920x1080/8Gb/637Gb HDD/DVD yes/Intel HD Graphics 615/Wi-Fi/Bluetooth/FreeDos',
                price: 1200,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/vqn1pYD/kisspng-laptop-computer-mouse-clip-art-notebook-5acf562025fd83-1909120315235374401556.png'
            },
            {
                id: '9',
                title: 'HP Pavilion G-7 2000',
                vendor: 'HP',
                color: 'black',
                material: 'plastic',
                description: 'Intel Core i7 1200 MHz/15"/FullHD/1920x1080/8Gb/1TB HDD/DVD yes/AMD Radeon 630/Wi-Fi/Bluetooth/Windows 10',
                price: 1800,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/RTWmdj6/kisspng-laptop-computer-hardware-personal-computer-netbook-b-5ad8b3ad082866-9386030215241512130334.png'
            },
            {
                id: '10',
                title: 'HP Pavilion G-Xd 2000',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core i7 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/FreeDos',
                price: 2980,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/4FZS81z/kisspng-laptop-intel-core-i7-lenovo-ideapad-notebook-5ac6989f1e6dd8-8752823515229646391246.png'
            },
            {
                id: '11',
                title: 'Testing MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/vZn9K9h/kisspng-laptop-dell-alienware-17-r4-dell-alienware-15-r3-5af35c535c8210-1929465915258983233789.png'
            },
            {
                id: '12',
                title: 'Testing MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/XFR9MPY/kisspng-laptop-intel-lenovo-thinkpad-l580-15-6-1920-x-108-5b1ac0c18c26f0-8392460815284799375741.png'
            },
            {
                id: '13',
                title: 'Testing MacBook (MLHC2RU/A)',
                vendor: 'Apple',
                color: 'silver',
                material: 'metal',
                description: 'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
                price: 980,
                promo: true,
                stock: true,
                imageSrc: 'https://i.ibb.co/C1wr0zn/kisspng-asus-zenbook-3-ux390-laptop-macbook-pro-kaby-lake-5b16a1e3437c27-8538270315282098912764.png'
            },
        ]
    },
    mutations: {
        createAd(state, payload) {
            state.ads.push(payload)
        },
        // loadAds (state, payload) {
        //     state.ads = payload
        // },
        // updateAds (state, {title, description, id}) {
        //     const ads = state.ads.find(a => {
        //         return a.id === id
        //     })
        //     ads.title = title
        //     ads.description = description
        // }
    },
    actions: {
        async createAd({
            commit,
            getters
        }, payload) {
            // payload.id = 'ddadsdsd'
            // commit('createAd', payload)
            commit('clearError')
            commit('setLoading', true)

            try {
                const newAd = new Ad(
                    payload.title,
                    payload.vendor,
                    payload.color,
                    payload.material,
                    payload.price,
                    payload.description,
                    getters.user.id,
                    payload.imageSrc,
                    payload.promo
                )

                const ads = await database.database().ref('ads').push(newAd)
                console.log(ads)

            } catch (error) {
                commit('setError', error.message)
                commit('setLoading', false)
                throw error
            }
        }
    },
    getters: {
        ads(state) {
            return state.ads
        },
        promoAds(state) {
            return state.ads.filter(ad => {
                return ad.promo === true // == true mojno ne pisat
            })
        },
        myAds(state) {
            return state.ads
        },
        adById(state) {
            return adId => {
                return state.ads.find((ad => ad.id === adId))
            }
        }
    }
}