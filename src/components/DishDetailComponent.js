import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({dish}){
    if(dish != null){
        return(
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    else return <div></div>;
}
function RenderComments({comments}) {
    if(comments != null){

        const comms = comments.map(x=>{
            return (
                <div key={x.id}>
                    <li>
                        <p>{x.comment}</p>
                        <p> <em>{x.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(x.date)))}</em></p>
                        <p>*********</p>
                    </li>
                </div>
            );
        })
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled">
                    {comms}
                </ul>
            </div>
        );
    }
    else return <div></div>;
}

const DishDetail = (props) => {
    if(props.selectedDish != null){
        return (
            <div className="row">
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                    <RenderDish dish={props.selectedDish}></RenderDish>
                </div>
                <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                    <RenderComments comments={props.selectedDish.comments}></RenderComments>
                </div>
            </div>
        );
    }
    else return <div></div>;
}
    
    

export default DishDetail;