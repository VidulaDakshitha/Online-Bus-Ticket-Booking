import React, {useEffect, useState} from "react";
import {database, firestore} from "../firebasejs";

function SamplePage() {

  const [name,setName]=useState('');
  const [age,setAge]=useState('');
  const [error,setError]=useState('');

  const [realtimeDB,setRealTimeDb]=useState([]);
  const [fireStore,setFireStore]=useState([]);

  let tempRealtimeData=[];
  useEffect(()=>{
    //------------------------------------------- real time database-------------------------------------------------------------
  database.ref('user').on('value',(snapshot)=>{
    tempRealtimeData=[];
    snapshot.forEach(arr=>{
      tempRealtimeData=[...tempRealtimeData,{id:arr.key,...arr.val()}]
    });
    setRealTimeDb(tempRealtimeData)

  })
//-------------------------------------------------------------------------------------------------------------------------------

    //------------------------------------------- fire store database-------------------------------------------------------------
    let tempFirestoreData=[];
    firestore.collection('user').onSnapshot(res=>{
      tempFirestoreData=[]
      res.docs.forEach(doc=>{
        tempFirestoreData=[...tempFirestoreData,{id:doc.id,...doc.data()}]
      });
      setFireStore(tempFirestoreData)
    },err=>setError(err))


  },[]);




  const submit=e=>{
    e.preventDefault();

    console.log(name,age)
    database.ref('user').push().set({
      userName:name,
      userAge:age
    }).catch(err=>setError(err))

    firestore.collection('user').doc(name).set({
      userName:name,
      userAge:age
    }).catch(err=>setError(err))


    setName('');
    setAge('');


  }

  return <div>
    <div className="container">
        <div className="row">
          <div className="mt-3 col-md-6 mx-auto bg-white shadow p-4">
            <form action="" onSubmit={submit}>
              {error&& <div className="alert alert-danger">{error}</div>}


              <label htmlFor="">Name</label>
              <input type="text" className="form-control block" value={name} onChange={e=>setName(e.target.value)} required/>
              <label className="mt-2" htmlFor="">Age</label>
              <input type="text" className="form-control block" value={age} onChange={e=>setAge(e.target.value)} required/>
              <button className="btn btn-primary mt-2">Submit</button>
            </form>

          </div>
        </div>



      <div className="row p-2">
        <div className="mt-3 col-md-6 mx-auto">
          <h1>Real Time Database</h1>
        {realtimeDB.map(data=>(

            <div key={data.id} className="bg-white shadow mt-2 p-2">{`Name ${data.userName} age ${data.userAge}`}</div>

        ))}
        </div>
        <div className="mt-3 col-md-6 mx-auto">
          <h1>Firestore Database</h1>
          {fireStore.map(data=>(

            <div key={data.id} className="bg-white shadow mt-2 p-2">{`Name ${data.userName} age ${data.userAge}`}</div>

          ))}
        </div>
      </div>




    </div>

  </div>
}export default SamplePage;
