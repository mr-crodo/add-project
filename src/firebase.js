// import firebase from 'firebase/app'
// import 'firebase/auth'
// import 'firebase/firestore'
//
// import Filter from 'bad-words'
// import {
//   ref,
//   onUnmounted,
//   computed
// } from 'vue'
//
// firebase.initializeApp({
//   apiKey: "AIzaSyCZIMlZkpYfv33r2ZbnrEEM8R_O1Z9RmS0",
//   authDomain: "chats-3b133.firebaseapp.com",
//   projectId: "chats-3b133",
//   storageBucket: "chats-3b133.appspot.com",
//   messagingSenderId: "886096682881",
//   appId: "1:886096682881:web:2003c395703933e9349280",
//   measurementId: "G-H79NB7H9DG"
// })
//
// const auth = firebase.auth()
//
// export function useAuth() {
//   const user = ref(null)
//   const unsubscribe = auth.onAuthStateChanged(_user => (user.value = _user))
//   onUnmounted(unsubscribe)
//   const isLogin = computed(() => user.value !== null)
//
//   const signIn = async () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider()
//     await auth.signInWithPopup(googleProvider)
//   }
//   const signOut = () => auth.signOut()
//
//   return {
//     user,
//     isLogin,
//     signIn,
//     signOut
//   }
// }
//
// const firestore = firebase.firestore()
// const messagesCollection = firestore.collection('messages')
// const messagesQuery = messagesCollection.orderBy('createdAt', 'desc').limit(100)
// const filter = new Filter()
//
// export function useChat() {
//   const messages = ref([])
//   const unsubscribe = messagesQuery.onSnapshot(snapshot => {
//     messages.value = snapshot.docs
//       .map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }))
//       .reverse()
//   })
//   onUnmounted(unsubscribe)
//
//   const {
//     user,
//     isLogin
//   } = useAuth()
//   const sendMessage = text => {
//     if (!isLogin.value) return
//     const {
//       photoURL,
//       uid,
//       displayName
//     } = user.value
//     messagesCollection.add({
//       userName: displayName,
//       userId: uid,
//       userPhotoURL: photoURL,
//       text: filter.clean(text),
//       createdAt: firebase.firestore.FieldValue.serverTimestamp()
//     })
//   }
//
//   return {
//     messages,
//     sendMessage
//   }
// }
