import React from "react";
import{Card} from'react-bootstrap';
class Person extends React.Component{
   person={ image:"https://images.daznservices.com/di/library/Goal_France/7f/b3/abdelmoumene-djabou-algeria-south-korea-world-cup-2014-06222014_58mbsr7b8pwi1b5u7ww0ylag7.jpg?t=300313528&w=800&h=600",
    name:"Aymen Bouzaien",
    bio:"GoMycode",
    profession:"developper At GomyCode",
}
render(){
return(
    <div>
   <Card border="primary" style={{ width: '18rem' }}>
    <Card.Header>{this.person.name}</Card.Header>
    <Card.Body>
    <Card.Img variant="top" src={this.person.image} />
      <Card.Title>{this.person.bio}</Card.Title>
      <Card.Text>
      {this.person.profession}
      </Card.Text>
    </Card.Body>
  </Card>
  </div>
);

}
}
export default Person;