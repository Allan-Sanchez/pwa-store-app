/*
** @funciona pero es la manera clasica y ya no tendra soporte en al version 3 
*/


import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      clientList: []
    }),
    mutations: {
      setDataClient(state){
        this.$fireStore.collection("clients").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                let client = {
                  name :doc.data().name,
                  date : doc.data().date,
                  gender: doc.data().gender 
                };
  
            state.clientList.push(client);
            });
        });
    }
    }
  })
}

export default createStore;



// export const state = () => ({
//   clientList: []
// });

// export const mutations = {
//       setDataClient(state){
//         this.$fireStore.collection("clients").get().then((querySnapshot) => {
//             querySnapshot.forEach((doc) => {
//                 let client = {
//                   name :doc.data().name,
//                   date : doc.data().date,
//                   gender: doc.data().gender 
//                 };
  
//             state.clientList.push(client);
//             });
//         });
//     }
// };

// export const strict = false;