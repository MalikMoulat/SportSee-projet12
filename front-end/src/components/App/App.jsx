//import Api from '../API/Api';
import getAllData from '../../API/Api';
import User from '../../Models/User';

const userArr = []
const activityArr = []
const averageArr = []
const performanceArr = []

function App() {

    function getDataUser(id) {

        getAllData(id).then((value) => {
            //console.log(value.user.data)


/*
            userArr.push(new User(value.user))
            activityArr.push(value.activity.data.data)
            averageArr.push(value.average.data.data)
            performanceArr.push(value.performance.data.data)*/

            //console.log('Dans la fonction :',new User(value.user.data))

            const userData = new User(value.user)
            // console.log('User :', userData)
            // console.log('Array Propetie : ', Object.keys(userData.data))
            // console.log('Array Value : ', Object.values(userData.data))

            for(const [key, valuee] of Object.entries(userData)){
                console.log('TEST DATA', key, valuee)
            }
            

            userArr.push(new User(value.user))
            activityArr.push(value.activity.data.data)
            averageArr.push(value.average.data.data)
            performanceArr.push(value.performance.data.data)

            console.log('ARR',userData)

            return userData            
        })
        return getAllData(id)

    } 
    
getDataUser(18)


//console.log('console = ',getDataUser(18))

/*
const getId = 12

async function getUserData() {

        const userDatas = await getDataUser(getId);

        console.log(userDatas)

        //const user = new User(userDatas);
        /*
        const perf = new Perf(userDatas.perf.data);
        const average = new Average(userDatas.average.data);
        const session = new Session(userDatas.activity.data);
       

        //console.log(user)
    }

    getUserData()
*/ 
//console.log(userArr)


//console.log('Object.keys :',Object.keys(userArr))
    //const uniqArr = [...new Set(arr)];

    /*
    console.log('userArr : ', userArr)
    console.log('activityArr : ', activityArr)
    console.log('averageArr : ', averageArr)
    console.log('performanceArr : ', performanceArr)
    */
    return(
       // eslint-disable-next-line react/react-in-jsx-scope
       <h1>HELLO</h1>
    )
}

export default App;