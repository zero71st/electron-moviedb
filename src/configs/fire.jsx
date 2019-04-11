import fire from  'firebase';

const config = {
    apiKey: 'AIzaSyBx4BOSEvPUH8Er4905Q6shu61fEPN6BQ0',
    authDomain: "mycomment-9e778.firebaseapp.com",
    databaseURL: "https://mycomment-9e778.firebaseio.com",
    projectId: "mycomment-9e778",
    storageBucket: "mycomment-9e778.appspot.com",
    messagingSenderId: "208922274925"
};

const fb = fire.initializeApp(config);

export default fb;