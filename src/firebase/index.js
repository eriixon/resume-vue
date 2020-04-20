import firebase from 'firebase'
import 'firebase/firestore'

const config = {};


firebase.initializeApp(config);

class Firebase {

    async getImage(){        
        var url  = await firebase.storage().ref().child('back-top.jpg').getDownloadURL()
        console.log("hh -> " + url)
        return url
    }
}

export default new Firebase();