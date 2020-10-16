import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Col, Container, Row } from 'reactstrap'
import {database, firestore} from "../../../firebasejs";
let tempRealTimeDb = [];



export default class AdminCharts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            realTimeDB:[],
                    
        }

    }


    componentDidMount() {

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

    filterData=()=>{

        let destination1=this.state.realTimeDB.filter(elemet=>(
                elemet.fromDestination=="Kollupitiya"
        ))


        let destination2=this.state.realTimeDB.filter(elemet=>(
            elemet.fromDestination=="Moratuwa"
         ))


        let destination3=this.state.realTimeDB.filter(elemet=>(
            elemet.fromDestination=="Dehiwala"
        ))

        let destination4=this.state.realTimeDB.filter(elemet=>(
            elemet.fromDestination=="Wellawatta"
        ))



        return(    
        <PieChart
            data={[
              { title: 'Kollupitiya',value:destination1.length, color: '#E38627' },
              { title: 'Moratuwa', value:destination2.length, color: '#C13C37' },
              { title: 'Dehiwala', value:destination3.length, color: '#6A2135' },
              { title: 'Wellawatta', value:destination3.length, color: '#667135' },
            ]}
          />)

    }


    groupAndFilterDataFromDestination=()=>{
        let jorurnyarry=this.state.realTimeDB;
        let groupjourny=  this.groupByKey(jorurnyarry,'fromDestination')

        let datarry=[];
        let lablearry=[];

        for (var key in groupjourny) {
            if (groupjourny.hasOwnProperty(key)) {

               var tempobject={
                    title:key,
                    value:groupjourny[key].length,
                    color:'#'+Math.random().toString(16).substr(-6)


                }

                
                datarry.push(tempobject)
            }
        }

        



        return(    

        <PieChart
        label={(props) => { return props.dataEntry.title;}}
            data={datarry}
          />)

    }

    groupAndFilterDataToDestination=()=>{
        let jorurnyarry=this.state.realTimeDB;
        let groupjourny=  this.groupByKey(jorurnyarry,'toDestination')

        let datarry=[];
        let lablearry=[];

        for (var key in groupjourny) {
            if (groupjourny.hasOwnProperty(key)) {

               var tempobject={
                    title:key,
                    value:groupjourny[key].length,
                    color:'#'+Math.random().toString(16).substr(-6)


                }

                
                datarry.push(tempobject)
            }
        }

        console.log(datarry);
        



        return(    

        <PieChart
        label={(props) => { return props.dataEntry.title;}}
            data={datarry}
          />)

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
            <Row>

            
               <Col>
               <h5>Passenger start points </h5>
                <Row style={chartStyle}>
                    {this.groupAndFilterDataFromDestination()}
                </Row>    
                </Col>
                     
          
           
              <Col>  
              <h5>Passenger Destination </h5>
              <Row style={chartStyle}>
                    {this.groupAndFilterDataToDestination()}
                </Row>  
              </Col>
                
                     
           

            </Row>


      
        )
    }
}


 const chartStyle={
        fontSize:'6px',
        borderRadius:10,
        height:200,
        color:'white',
        padding:10,
        margin:5
    
 }