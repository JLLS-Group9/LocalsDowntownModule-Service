import React from 'react'
import axios from 'axios'
import Table from './Table.jsx'
import styles from './style.css';

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
   var ran = Math.ceil(Math.random()*100)

  axios.get(`/api/homes/${ran}`)

  .then((res)=>(this.setState({record: res.data, property:res.data[0].name, neighborhood:res.data[0].neighborhood.name, reviews:res.data[0].neighborhood.reviews})))
  .catch((err) => (console.log(err)))
}


 render() {
   return (
     <div className={styles.background}>
       <h2> What Locals Say about Downtown</h2>
       <h5> At least 133 Trulia users voted on each feature </h5>
       <h1> Welcome to Property:{this.state.property} </h1>
        <h4  className={styles.title} >Located in Neighborhood:{this.state.neighborhood} </h4>
        <div className={styles.review}>
      <Table datas={this.state.reviews} />
        </div>
      </div>
   )
 }
}

export default App