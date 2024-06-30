import { useState, useEffect } from 'react';
import  { STRAVA_CALL_REFRESH, STRAVA_CALL_ACTIVITIES } from '../lib/constants';
import Counter from "./counter";
import axios from 'axios';
import sha1 from 'crypto-js/sha1';


export default function Counters({ donors }) {
    
const [ isLoading, setIsLoading ] = useState(true);
const [ activities, setActivities ] = useState([]);
const [ runs, setRuns ] = useState([]);

useEffect(() => {
    fetch(STRAVA_CALL_REFRESH, {
        method: 'POST'
    })
    .then(res => res.json())
    .then(result => getActivities(result.access_token))
}, [STRAVA_CALL_REFRESH])

  // use current access token to call all activities
  // function getActivities(access){
  //   // console.log(callActivities + access)
  //     fetch(STRAVA_CALL_ACTIVITIES + access)
  //     .then(res => res.json())
  //     .then(data => {
  //       const runs = data.filter(activity => {
  //           return activity.type === 'Run'
  //       });
  //       setActivities(runs);
  //       setIsLoading(prev => !prev);
  //   })
  //     .catch(e => console.log(e))
  // }

  function getActivities(access) {
    const endpoints = [`${STRAVA_CALL_ACTIVITIES + access + `&page=1`}`,`${STRAVA_CALL_ACTIVITIES + access + `&page=2`}`]
    const fetchPromises = endpoints.map(endpoint => fetch(endpoint))
    Promise.all(fetchPromises)
    .then(responses => Promise.all(responses.map(res => res.json())))
//     .then(allActivities => {
//       console.log('All ACTIVITIES', allActivities)
//       const ALL_ACTIVITIES = [].concat(allActivities[0], allActivities[1])
//       console.log('ALLL ACTIVITIEEEES', ALL_ACTIVITIES)
//       allActivities.forEach((activityArray) => {
//         console.log('activityArray', activityArray)
//         const runs = activityArray.filter(activity => {
//           return activity.type === 'Run'
//     });
//     console.log('runs', runs)
//     setRuns([...runs]);
//     setIsLoading(prev => !prev);
//   });
// })
    .then(allActivities => {
      let ALL_ACTIVITIES = [];
      allActivities.forEach((activityArray) => {
        ALL_ACTIVITIES = ALL_ACTIVITIES.concat(activityArray)
      })
      const runs = ALL_ACTIVITIES.filter(activity => {
          return activity.type === 'Run'
        });
        setRuns([...runs])
        setIsLoading(prev => !prev)
    })
.catch(e => console.log(e))
  }

  function showRuns(){
    if(isLoading) return <>LOADING</>
    if(!isLoading) {
      console.log(  )
      return runs.length
    }
  }

  function showTotalDistance() {
    if(isLoading) return <>LOADING</>
    if(!isLoading) {
      console.log(  )
      const totalDistanceMeters = runs.reduce((accumulator, run) => {
        return accumulator + run.distance
      }, 0)

      const totalDistanceKm = Math.round(totalDistanceMeters*100/1000)/100;

      return totalDistanceKm;
    }
  }

  // const auth_id = "675";
  // const auth_key = "8a0e3a142a901c2b9c90c94e40118d07";
  // const ts: any = new Date("2016-04-01 10:31:45");
  // const authorization = sha1(auth_key, "&", ts);
  // const from_date: any = new Date('2023-07-01');
  // const data = `authorization=${encodeURIComponent(authorization)}&ts=${encodeURIComponent(ts)}&from_date=${encodeURIComponent(from_date)}`

  // function getDonations() {
  //   axios.post(`https://sms-2w-api.syscomdigital.ro/stats/total-donatori/${auth_id}`, data)
  //   .then(result => console.log('result', result));
  // }

  // getDonations();

  const textKM = `* kilometri alergați de la începutul campaniei`
  const textSMS = `** donațiile active din cele necesare hranei animăluțelor în fiecare lună`

        return (  
          <div>
               <section className="flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-6">
                    <Counter  title={'KM*'} value={showTotalDistance()} total={5000} text={textKM} />
                </section>
                <section className="flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-6">
                    <Counter  title={'SMS**'} value={donors} total={5000} text={textSMS} />
                </section>
          </div>
                
            
        )
    }