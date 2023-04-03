import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import food from "../assest/img/seasons-tea-and-buns-1.png";
import Form from "react-bootstrap/Form";

const Cards = () => {
  const optionData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      <Card
        style={{
          width: "18rem",
          marginTop: "10px",
          maxHeight: "365px",
          marginLeft: "10px",
        }}
      >
        <Card.Img
          variant="top"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg"
          alt="food"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>Some quick example text </Card.Text>
          <div className="option-container">
            <div className="h-100 w-40">
              <Form.Select
                aria-label="Default select example"
                className=" form-container rounded"
              >
                {optionData.map((el, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {el}
                    </option>
                  );
                })}
              </Form.Select>
            </div>
            <div className="h-100 w-10">
              <Form.Select
                aria-label="Default select example"
                className=" form-container rounded"
              >
                <option value="half">Half</option>
                <option value="full">Full</option>
              </Form.Select>
            </div>
          </div>
          <div>Total Price</div>
          {/* <Container className="pt-2">
              <Button variant="primary">Add to Cart</Button>
            </Container> */}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
