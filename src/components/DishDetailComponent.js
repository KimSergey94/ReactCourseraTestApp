import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component{

    constructor(props){
        super(props);
    }

    render(){
        if(this.props.selectedDish != null){
            return (
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                        {this.renderDish()}
                    </div>
                    <div className="col-12 col-sm-12 col-md-5 col-lg-5 col-xl-5 m-1">
                        {this.renderComments()}
                    </div>
                </div>
            );
        }
        else return <div></div>
    }
    renderDish(){
        return(
            <Card>
                <CardImg width="100%" src={this.props.selectedDish.image} alt={this.props.selectedDish.name}></CardImg>
                <CardBody>
                    <CardTitle>{this.props.selectedDish.name}</CardTitle>
                    <CardText>{this.props.selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }
    renderComments() {
        if(this.props.selectedDish != null){
            const comms = this.props.selectedDish.comments.map(x=>{
                return (
                    <div>
                        <li>
                            <p>{x.comment}</p>
                            <p> <em>{x.author} {x.date}</em></p>
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
        else return <div></div>
    }
}

export default DishDetail;