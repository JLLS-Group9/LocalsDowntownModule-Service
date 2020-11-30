import React from 'react'
import axios from 'axios'
import ReviewListContainer from './ReviewListContainer.jsx'
import styles from './style.css';
import Navbar from './NavBar.jsx'
import Votes from "./Votes.jsx"
import allfeatures from './allfeatures.jsx'
import lessfeatures from './lessfeatures.jsx'
import SingleReviewModal from './SingleReviewModal.jsx'
import AllReviewModal from './AllReviewModal.jsx'

class App extends React.Component {
 constructor(props) {
   super(props)
   this.state = {
     record: [],
     property:null,
     neighborhood:null,
     topics:[],
     reviews:[],
     features: [],
     modalstate:false,
     modaldata:{},
     toggle:true,
     AllReviewsmodalstate: false

   }
   this.changeTopic = this.changeTopic.bind(this)
   this.clickallfeatures = this.clickallfeatures.bind(this)

   this.renderModal = this.renderModal.bind(this)
   this.hideModal = this.hideModal.bind(this)
   this.renderAllReviewsmodal = this.renderAllReviewsmodal.bind(this)
   this.retrievebooking = this.retrievebooking.bind(this)
   this.renderfeatures = this.renderfeatures.bind(this)
 }

componentDidMount() {


 this.retrievebooking()
}

retrievebooking(){
  axios.get(`${window.location.pathname}reviews`)

  .then((res)=>(this.setState({record: res.data[0], property:res.data[0].name, neighborhood:res.data[0].neighborhood.name, reviews:res.data[0].neighborhood.reviews, topics:res.data[0].neighborhood.reviews}),  this.renderfeatures(res.data[0])))

  .catch((err) => (console.log(err)))
}

changeTopic(event) {

 this.setState({reviews: event})
}

clickallfeatures() {
  if (this.state.toggle ) {
    this.setState({features: allfeatures(this.state.record), toggle:false })
    event.target.innerHTML = "See Less"
  } else {
    this.setState({features: lessfeatures(this.state.record), toggle:true })
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

}

renderfeatures(props) {
  this.setState({ features: lessfeatures(props)})
}

 render() {

   return (
     <div className={styles.background}>
       <h2 className={styles.titletext} > What Locals Say about {this.state.neighborhood}</h2>
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


