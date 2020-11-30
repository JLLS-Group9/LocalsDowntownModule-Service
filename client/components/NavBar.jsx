import React from 'react'
import style from './style.css'
class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {topic:[]}
    this.handleClickAll = this.handleClickAll.bind(this);
    this.handleClickCommunity = this.handleClickCommunity.bind(this);
    this.handleClickDogs = this.handleClickDogs.bind(this);
    this.handleClickParents = this.handleClickParents.bind(this);
    this.handleClickCommute = this.handleClickCommute.bind(this);
    this.changeBack = this.changeBack.bind(this);
    this.changeBackground = this.changeBackground.bind(this);

  }

  handleClickAll(topics) {
   this.setState({topic: topics})
    this.props.changeTopic(topics)

  }

  handleClickCommunity(topics) {
   var news = [];
   for (var i = 0; i < topics.length; i++) {
     if (topics[i].topic === "Community") {
       news.push(topics[i])
     }
   }
   this.setState({topic: news})
   this.props.changeTopic(news)
  }

  handleClickDogs(topics) {
    var news = [];
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].topic === "Dog Owners") {
        news.push(topics[i])
      }
    }
    this.setState({topic: news})
    this.props.changeTopic(news)
   }

   handleClickParents(topics) {
    var news = [];
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].topic === "Parents") {
        news.push(topics[i])
      }
    }
    this.setState({topic: news})
    this.props.changeTopic(news)
   }

   handleClickCommute(topics) {
    var news = [];
    for (var i = 0; i < topics.length; i++) {
      if (topics[i].topic === "Commute") {
        news.push(topics[i])
      }
    }
    this.setState({topic: news})
    this.props.changeTopic(news)
   }



    changeBack(e) {
      e.target.style.background = 'transparent';
    }

    changeBackground(e) {
      e.target.style.background = '#e1e1e1';
    }


  render() {
  return(
  <div className={style.navbar}>
    <span >
    <button id='allbutton' className={style.allbutton}  onMouseLeave={this.changeBack}  onMouseEnter={(this.changeBackground)} onClick={()=> {this.handleClickAll(this.props.topics)}}
    >All</button>
    </span>
    <span>
    <button className={style.button} onMouseLeave={this.changeBack} onMouseEnter={(this.changeBackground)} onClick={()=> {this.handleClickCommunity(this.props.topics)}}>Community</button>
    </span>
    <span>
    <button className={style.button} onMouseLeave={this.changeBack} onMouseEnter={(this.changeBackground)} onClick={()=> {this.handleClickDogs(this.props.topics)}}>Dog Owners</button>
    </span>
    <span>
    <button className={style.button} onMouseLeave={this.changeBack} onMouseEnter={(this.changeBackground)} onClick={()=> {this.handleClickParents(this.props.topics)}}>Parents</button>
    </span>
    <span>
    <button className={style.button}  onMouseLeave={this.changeBack} onMouseEnter={(this.changeBackground)} onClick={()=> {this.handleClickCommute(this.props.topics)}}>Commute</button>
    </span>
  </div>
  )
  }
}
export default NavBar;