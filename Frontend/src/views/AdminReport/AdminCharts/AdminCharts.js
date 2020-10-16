import React, { Component } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import { Row } from 'reactstrap'
import {database, firestore} from "../../../firebasejs";



export default class AdminCharts extends Component {

    constructor(props) {
        super(props)
        this.state = {
            jounryData:[],
            destination:0
                    
        }

    }


    componentDidMount() {


    }


    getCount=(location) => {

        let val1,val2,val3;
        
        var ref = database.ref("journey").orderByChild("fromDestination");
       
        ref.equalTo(location).on("value").then(function(snapshot) {
            val1=snapshot.numChildren()
            
        });

        this.setState({
            destination:val1
        })

        

    }
 

    

    groupBy=async (list, keyGetter)=> {
    const map = new Map();
    list.forEach((item) => {
         const key = keyGetter(item);
         const collection = map.get(key);
         if (!collection) {
             map.set(key, [item]);
         } else {
             collection.push(item);
         }
    });
    return map;
}


    showLocationChart=async (journeys)=>{
 
   }




    


    render() {
         
        return (
        <Row style={chartStyle}> 
         <PieChart
        data={[
          { title: 'Kollupitiya',value: this.state.destination, color: '#E38627' },
          { title: 'Moratuwa', value:this.state.destination, color: '#C13C37' },
          { title: 'Dehiwala', value:5, color: '#6A2135' },
        ]}
      />
 
                 
        </Row>
        )
    }
}


 const chartStyle={
     wigth:'400px',
     height:'300px'
 }