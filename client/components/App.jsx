import React from 'react'
import axios from 'axios'
import ReviewListContainer from './ReviewListContainer.jsx'
import styles from './style.css';
import Navbar from './Navbar.jsx'
import Votes from "./Votes.jsx"
import allfeatures from './allfeatures.jsx'
import lessfeatures from './lessfeatures.jsx'
import SingleReviewModal from './SingleReviewModal.jsx'
import AllReviewModal from './AllReviewModal.jsx'

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     record: null,
     property:null,
     neighborhood:null,
     topics:[],
     reviews:[],
     features: lessfeatures,
     modalstate:false,
     modaldata:{},
     AllReviewsmodalstate: false

   }
   this.changeTopic = this.changeTopic.bind(this)
   this.clickallfeatures = this.clickallfeatures.bind(this)

   this.renderModal = this.renderModal.bind(this)
   this.hideModal = this.hideModal.bind(this)
   this.renderAllReviewsmodal = this.renderAllReviewsmodal.bind(this)
 }

componentDidMount() {
   var ran = Math.ceil(Math.random()*100)

  axios.get(`/api/homes/${ran}/reviews`)

  .then((res)=>(this.setState({record: res.data, property:res.data[0].name, neighborhood:res.data[0].neighborhood.name, reviews:res.data[0].neighborhood.reviews, topics:res.data[0].neighborhood.reviews}), console.log(res.data[0].neighborhood.reviews)))
  .catch((err) => (console.log(err)))
}

changeTopic(event) {
 console.log(event)
 this.setState({reviews: event})
}

clickallfeatures() {
  if (this.state.features === lessfeatures) {
    this.setState({features: allfeatures })
    event.target.innerHTML = "See Less"
  } else {
    this.setState({features: lessfeatures })
    event.target.innerHTML = "See All"
  }

}

renderModal(data) {
  this.setState({modalstate: true, modaldata: data})
}

hideModal() {
  this.setState({modalstate: false, modaldata: {},  AllReviewsmodalstate: false})
}

renderAllReviewsmodal() {
  this.setState({AllReviewsmodalstate: true})
  console.log('ive been clicked' + this.state.AllReviewsmodalstate)
}

 render() {
   return (
     <div className={styles.background}>
       <h2 className={styles.titletext} > What Locals Say about Downtown</h2>
       <h5 className={styles.ptext}> At least 133 Trulia users voted on each feature </h5>

        <Votes features={this.state.features} />
        <button onClick={this.clickallfeatures} className={styles.Voterbutton}> See All </button>
        <p className={styles.paragraphtext}> Learn more about our methodology. </p>
        <Navbar className={styles.navbar} topics={this.state.topics} changeTopic={this.changeTopic}/>
        <div className={styles.review}>
      <ReviewListContainer datas={this.state.reviews} renderModal={this.renderModal} renderAllReviews={this.renderAllReviewsmodal}/>
        <SingleReviewModal hideModal={this.hideModal} data={this.state.modaldata} modalstate={this.state.modalstate} />
        <AllReviewModal AllReviewsmodalstate={this.state.AllReviewsmodalstate} datas={this.state.reviews} hideModal={this.hideModal}  topics={this.state.topics} changeTopic={this.changeTopic}/>
        </div>
      </div>
   )
 }
}

export default App


