import { Card, Container, ListGroup } from "react-bootstrap";
import Base from "../components/Base";

function Services() {
  return (
    <Base
      title="Services we provide"
      description="In this page we will discuss about the services that we provide."
      buttonEnabled={true}
      buttonLink="/"
      buttonType="warning"
      buttonText="Home"
    >
      <Container className="mt-5" > 
         <Card 
         className="shadow"
          style={{
            position: "relative",
            top: -30

        }}>
         <ListGroup as="ol"  className="m-3" >
            <ListGroup.Item as="li" className="bg-dark text-white shadow-lg">
            <h3>   Here are some features I consider including on my shopping website: </h3>
           </ListGroup.Item>
         </ListGroup>

         <ListGroup as="ol" numbered>
            <ListGroup.Item as="li">
                <strong>User-friendly interface:</strong> Easy navigation, clear product categories, and a simple checkout process.
           </ListGroup.Item>
            <ListGroup.Item as="li">
                <strong>High-quality product images :</strong> Detailed product photos from multiple angles, with zoom functionality.
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <strong>Product reviews and ratings: </strong>Allow customers to leave feedback and rate products to build trust and help others make informed decisions.
            </ListGroup.Item>
             <ListGroup.Item as="li">
                <strong> Secure payment gateway: </strong> Offer multiple payment options, such as credit cards, PayPal, and Apple Pay, to ensure a secure and convenient checkout experience.
            </ListGroup.Item>

            <ListGroup.Item as="li">
                <strong>Social media integration: </strong> Allow customers to share products, reviews, and wish lists on social media platforms.
            </ListGroup.Item>
             <ListGroup.Item as="li">
                <strong> Secure payment gateway: </strong> Offer multiple payment options, such as credit cards, PayPal, and Apple Pay, to ensure a secure and convenient checkout experience.
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <strong>Order tracking and updates:</strong>AKeep customers informed about their order status, shipping, and delivery.
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <strong>Responsive design:</strong> Ensure a smooth shopping experience across various devices, including desktops, tablets, and mobile phones.
            </ListGroup.Item>
            <ListGroup.Item as="li">
                <strong>Gift options:</strong> Offer gift wrapping, personalized messages, and the ability to purchase gift cards.
            </ListGroup.Item>


        </ListGroup>
         </Card>
      </Container>
   
     </Base>
   );
}

export default Services;
