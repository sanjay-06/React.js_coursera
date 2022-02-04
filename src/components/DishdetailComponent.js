import React, { Component } from 'react';
import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';


export default class Dishdetail extends Component {

    constructor(props) {
        super(props)

        this.state ={
            selectedDish:null
        }
    }


    renderDish(dish){
        if(dish!=null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (
                <div></div>
            );
        }
    }

    renderComments(allcomments){
        if (allcomments == null) {
            return (<div></div>)
        }
        const cmnts = allcomments.comments.map(comment => {
            return (
                <li key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>-- {comment.author},
                    &nbsp;
                    {new Intl.DateTimeFormat('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: '2-digit'
                    }).format(new Date(comment.date))}
                    </p>
                </li>
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4>Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }


  render() {
    return(
        <div className='row'>
            <div className='col-12 col-md-5 m-1'>
                {this.renderDish(this.props.dish)}
            </div>

            {this.renderComments(this.props.dish)}
        </div>
    );
  }
}
