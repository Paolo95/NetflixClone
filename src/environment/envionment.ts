export const environment = {
    production: false,
    auth: {
        domain: 'dev-6vy55ljstf0q2wgy.us.auth0.com',
        clientId: 'XTVc46q8lgS74iy1faPqhgRUg2JKTBPJ',
        authorizationParams: {
            redirect_uri: 'http://localhost:4200/it/user-home'
        }
    },
    movieDB: {
        baseUrl: "https://api.themoviedb.org/3",
        apikey: "2804879a2f005d6603d6f81bc600de3d"
    }
};