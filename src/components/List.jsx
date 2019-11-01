import React, { Component} from "react";
import { connect } from "react-redux";
import { removeArticle, addArticle } from '../actions/index'
import store from '../store/index'

const mapStateToProps = state => {
  return { 
    articles: state.articles,
  };
};

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article)),
  removeArticle: id => dispatch(removeArticle(id))
})



class ConnectedList extends Component {
  constructor(props){
    super(props) 
  }
  handeDelete = (event) => {
    console.log("en componente lista" , event.target.value)
    console.log(this.props.articles)
    this.props.removeArticle(event.target.value);
  }
 
  render (){
    console.log(this.props.articles)
    return (
      <ul>
      {this.props.articles.map((el, idx) => (
        <li key={idx} className={idx}>{el.title}<button value={idx} onClick={this.handeDelete}>Delete</button></li>
      ))}
    </ul>
    )
  }
  



}




const List = connect(
  mapStateToProps,
  mapDispatchToProps
  )(ConnectedList);
export default List;
