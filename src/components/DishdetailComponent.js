import { Card, CardImg,CardText, CardBody, CardTitle } from 'reactstrap';



    const renderDish =(dish)=> {
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

    const renderComments = (allcomments) => {
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
            <div className='m-1 col-12 col-md-5'>
                <h4>Comments </h4>
                <ul className='list-unstyled'>
                    {cmnts}
                </ul>
            </div>
        )
    }


  const DishDetail=(props) =>{
    return(
        <div className='container'>
             <div className='row'>
                <div className='m-1 col-12 col-md-5'>
                    {renderDish(props.dish)}
                </div>

            {renderComments(props.dish)}
        </div>

        </div>

    );
  }

export default DishDetail
