import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {database, firestore} from "../../../firebasejs";

let tempRealTimeDb = [];





export default class Adminsmap extends Component {


    constructor(props) {
        super(props);

        this.state = {
            realTimeDB:[],
                    
        }

    }

    componentDidMount(){
        database.ref('journey').on('value',(snapshot)=>{
            tempRealTimeDb=[];
            snapshot.forEach(arr=>{
                tempRealTimeDb=[...tempRealTimeDb,{id:arr.key,...arr.val()}]
            })

            this.setState({
                realTimeDB: tempRealTimeDb,
            })
        })
    }

 
    getPosstion=(name)=>{

        // const position={
        //     "Kollupitiya":{
        //         latitude:6.914747,
        //         longitude:79.851471
        //     },
        //     "Moratuwa":{
        //         latitude:6.793260,
        //         longitude:79.880650
        //     },
        //     "Dehiwala":{
        //         latitude:6.839670,
        //         longitude:79.875969

        //     },
        //     "Wellawatta":{
        //         latitude:6.268910,
        //         longitude:80.039429

        //     },
        //     "Mount Lavnia":{
        //         latitude:6.831209,
        //         longitude:79.862967

        //     },

        //     "Bambalapitiya":{
        //         latitude:6.893843,
        //         longitude:79.853225

        //     },

        //     "Ratmalana":{
        //         latitude:6.814471,
        //         longitude:79.868288

        //     },

        //     "Colombo 1":{
        //         latitude:6.934468,
        //         longitude:79.847946

        //     },

        // }

      if(name=='Kollupitiya'){
          return( {
            latitude:6.914747,
            longitude:79.851471
        })
      }else if(name=='Moratuwa'){
        return( {
            latitude:6.914747,
            longitude:79.851471
        })

      }else if(name=='Dehiwala'){
        return( {
            latitude:6.839670,
            longitude:79.875969
        })

      }else if(name=='Wellawatta'){
        return( {
            latitude:6.875302,
            longitude:79.863268
        })

      }else if(name=='Mount Lavnia'){
        return( {
            latitude:6.831209,
            longitude:79.862967
        })

      }else if(name=='Bambalapitiya'){
        return( {
            latitude:6.893843,
            longitude:79.853225
        })

      }else if(name=='Ratmalana'){
        return( {
            latitude:6.814471,
            longitude:79.868288
        })

      }else if(name=='Colombo 1'){
        return( {
            latitude:6.934468,
            longitude:79.847946
        })

      }else {

        return( {
            latitude:6.934468,
            longitude:79.868288
        })

      }






    }

    

    showMaker=()=>{

       

        let jorurnyarry=this.state.realTimeDB;
        let groupjourny=  this.groupByKey(jorurnyarry,'toDestination')

        let datarry=[];



        for (var key in groupjourny) {
            if (groupjourny.hasOwnProperty(key)) {

               var tempClouded={
                    position:this.getPosstion(key),
                    value:groupjourny[key].length,
                  


                }

                
                datarry.push(tempClouded)
                console.log(datarry);
            }
        }



        // let marker=[{
        //          latitude:6.9044,
        //          longitude :79.85,
        //          passeger:125
         
        //      },
         
        //       {
        //          latitude:6.934468,
        //          longitude :79.847946,
        //          passeger:354

         
        //      }]

       return( datarry.map(marker => (
            <div style={makerstyles}
                // position={{ lat: marker.position.latitude, lng: marker.position.longitude }}
                lat={ marker.position.latitude}
                lng={marker.position.longitude}
               
              >{marker.value}</div>
          ))

    //       return( 
    //              marker.map(marker => (
    //                 <p
    //                      lat={ marker.latitude}
    //                      lng={ marker.longitude}
                         
    //                 >fdhyfyfy</p>
    //              ))
       )
    }





    groupByKey=(array, key) =>{
        return array
          .reduce((hash, obj) => {
            if(obj[key] === undefined) return hash; 
            return Object.assign(hash, { [obj[key]]:( hash[obj[key]] || [] ).concat(obj)})
          }, {})
     }
 

    render() {
        return (
            <div style={mapStyle}>
                <h3>Passenger crowded Places</h3>
                <GoogleMapReact 
                         defaultCenter={mapProps.center}
                         defaultZoom={mapProps.zoom}>


                    {this.showMaker()}

                               
                          

                </GoogleMapReact>
            </div>
        );
    }
}


const mapStyle = {

    height: '100vh', width: '100%'
}
 

const mapProps = {

    center: {
        lat: 6.860645,
        lng: 79.870515
      },
      zoom: 11

}

const makerstyles={
    textAlign: 'center',
    borderStyle: 'solid',
    fontSize: '30px',
    width: '50px',
    borderWidth: 'thick',
    borderColor: '#fbfbfb',
    height: '50px',
    backgroundColor: '#2361e0',
    borderRadius: '100%',
    color: 'white'
}

