import React from 'react'
import axios from 'axios'
import Table from './Table.jsx'

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     record: null,
     property:null,
     neighborhood:null,
     reviews:[],
   }
 }

componentDidMount() {
  axios.get('/test')
  .then((res)=>(this.setState({record: res.data, property:res.data[0].id, neighborhood:res.data[0].neighborhood.name, reviews:res.data[0].neighborhood.reviews})))
}


 render() {
   return (
     <div>
       <h1> Welcome to Property:{this.state.property} </h1>
        <h4>Located in Neighborhood:{this.state.neighborhood} </h4>
      <Table datas={this.state.reviews} />
      </div>
   )
 }
}

export default App