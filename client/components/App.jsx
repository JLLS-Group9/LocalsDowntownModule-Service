import React from 'react'
import axios from 'axios'
import Table from './Table.jsx'
import styles from './style.css';
import Navbar from './Navbar.jsx'
import Votes from "./Votes.jsx"
import Dfeatures from './allfeatures.js'
import Modal from './Modal.jsx'

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     record: null,
     property:null,
     neighborhood:null,
     topics:[],
     reviews:[],
     features: Dfeatures.lessfeatures,
     modalstate:false,
     modaldata:{}

   }
   this.changeTopic = this.changeTopic.bind(this)
   this.clickallfeatures = this.clickallfeatures.bind(this)
   this.clicklessfeatures = this.clicklessfeatures.bind(this)
   this.renderModal = this.renderModal.bind(this)
   this.hideModal = this.hideModal.bind(this)
 }

componentDidMount() {
   var ran = Math.ceil(Math.random()*100)

  axios.get(`/api/homes/${ran}`)

  .then((res)=>(this.setState({record: res.data, property:res.data[0].name, neighborhood:res.data[0].neighborhood.name, reviews:res.data[0].neighborhood.reviews, topics:res.data[0].neighborhood.reviews}), console.log(res.data[0].neighborhood.reviews)))
  .catch((err) => (console.log(err)))
}

changeTopic(event) {
 console.log(event)
 this.setState({reviews: event})
}

clickallfeatures() {
  this.setState({features: Dfeatures.allfeatures })
}

clicklessfeatures() {
  this.setState({features: Dfeatures.lessfeatures })
}

renderModal(data) {
  this.setState({modalstate: true, modaldata: data})
}

hideModal() {
  this.setState({modalstate: false, modaldata: {}})
}

 render() {
   return (
     <div className={styles.background}>
       <h2> What Locals Say about Downtown</h2>
       <h5> At least 133 Trulia users voted on each feature </h5>
       <h1> Welcome to Property: {this.state.property} </h1>
        <h4  className={styles.title} >Located in Neighborhood:{this.state.neighborhood} </h4>
        <Votes features={this.state.features} />
        <button onClick={this.clickallfeatures} className={styles.button}> See All </button>
        <button onClick={this.clicklessfeatures} className={styles.button}> See Less </button>
        <Navbar topics={this.state.topics} changeTopic={this.changeTopic}/>
        <div className={styles.review}>
      <Table datas={this.state.reviews} renderModal={this.renderModal} />
        <Modal hideModal={this.hideModal} data={this.state.modaldata} modalstate={this.state.modalstate} />
        </div>
      </div>
   )
 }
}

export default App


