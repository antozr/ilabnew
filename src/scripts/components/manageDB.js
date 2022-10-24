
import { collection, onSnapshot ,docs} from "firebase/firestore"
import { store } from "../../app/store"
import db from "../firebase"
import { dataJob } from "../storeManage/userDataStore"


export default function dbAllTime() {

    
    // if (boxDatanav.length < 1) {
    //     
    // }
    onSnapshot(collection(db, "dataRange"), (snap) => {
        store.dispatch(
            dataJob(
                snap.docs.map((doc) => ({
                    id: doc.id,
                    data: doc.data()
                })),
                snap.docs.forEach((el) => {
                    console.log(el.data())
                })
            )
        )
    })
    console.log('haaaaaaaaaaaaaaaaaaaa');
    console.log(store.getState().dataPerso.dataUser);
    let allData = store.getState().dataPerso.dataUser;
    for (let index = 0; index < allData; index++) {
        console.log(allData[index]);

    }

    setInterval(()=>{
        let boxDatanav = store.getState().dataPerso.dataUser;
         console.log(boxDatanav[0].id);
    if (boxDatanav[0].id == '3zZic48M0XGDkHI9AyCr'){
        let allRangeDiv = document.querySelectorAll('.nav__rangeINto');
        let indexRangeStart = 0;
        allRangeDiv.forEach((el)=>{
            
            if (indexRangeStart == 0){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10)+'%';
                indexRangeStart++;
            }else if(indexRangeStart == 1){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 2){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 3){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent,10) +'%';
                indexRangeStart++;
            }else if (indexRangeStart == 4){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10)+'%';
                indexRangeStart++;
            }else if(indexRangeStart == 5){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 6){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 7){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent,10) +'%';
                indexRangeStart++;
            }else if (indexRangeStart == 8){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10)+'%';
                indexRangeStart++;
            }else if(indexRangeStart == 9){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 10){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 11){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent,10) +'%';
                indexRangeStart++;
            }else  if (indexRangeStart == 12){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10)+'%';
                indexRangeStart++;
            }else if(indexRangeStart == 13){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 14){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 15){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent,10) +'%';
                indexRangeStart++;
            }else  if (indexRangeStart == 16){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.nourriture, 10)+'%';
                indexRangeStart++;
            }else if(indexRangeStart == 17){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.materiaux,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 18){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.bonheur,10) +'%';
                indexRangeStart++;
            }else if(indexRangeStart == 19){
                el.style.width = parseInt(store.getState().dataPerso.dataUser[0].data.argent,10) +'%';
                indexRangeStart++;
            }
            
        })
    }
    },60000)
}