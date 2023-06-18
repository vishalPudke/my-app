import { Card, Carousel, ListGroup } from "react-bootstrap";
import VideoPlayer from "./VideoPlayer";

function Homepage() {
  return (
    <>
      <header></header>
      <main>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10" style={{ objectFit: "cover" }}>
            <VideoPlayer />
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-10">
            <Carousel className="my-1 mx-1" slide={true}>
              <Carousel.Item className="col-9 mx-auto">
                <img
                  className="d-block w-100"
                  style={{ objectFit: "cover" }}
                  src="./image6.jpg"
                  alt="First slide"
                />

                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="col-9 mx-auto">
                <img
                  className="d-block w-100"
                  src="./image2.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item className="col-9 mx-auto">
                <img
                  className="d-block w-100"
                  src="https://th.bing.com/th/id/OIP.uoIU21D92LUpwzKQKWLk3wHaEf?pid=ImgDet&rs=1"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>

        <container>
          <div className="row text-center">
            <h1>MAI BEST WEBPAGE BANAYEGA</h1>
          </div>
        </container>

        <container>
          <section
            className="container mt-5"
            style={{ backgroundColor: "rgb(149, 233, 136)" }}
          >
            <h1>Welcome to Online Tiffin Booking!!!</h1>
            <p>Manage your tiffin subscriptions with ease!</p>
          </section>

          <section className="container mt-2">
            <div className="row">
              <img src="image6.jpg" height="335" width="1250" alt="Tiffin" />
            </div>
          </section>

          <section id="menu">
            <div
              className="container mt-4"
              style={{ backgroundColor: "rgb(173, 216, 230)" }}
            >
              <h2 style={{ textAlign: "center" }}>MEAL PLANS</h2>
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img
                      src="image2.jpg"
                      className="card-img-top"
                      alt="Menu Item 1"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Full Mix Tiffin</h5>
                      <p className="card-text">Monthly Pack ₹ 4000</p>
                      <p className="card-text">Daily Pack ₹ 140</p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img
                      src="./image3.jpg"
                      height="235"
                      className="card-img-top"
                      alt="Menu Item 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Vegan Tiffin</h5>
                      <p className="card-text">Monthly Pack ₹ 5000</p>
                      <p className="card-text">Daily Pack ₹ 170</p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card mb-4">
                    <img
                      src="image4.jpg"
                      className="card-img-top"
                      alt="Menu Item 2"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Non-Veg Tiffin</h5>
                      <p className="card-text">Monthly Pack ₹ 6000</p>
                      <p className="card-text">Daily Pack ₹ 200</p>
                      <a href="#" className="btn btn-primary">
                        Order Now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              {/*** ------------------------------------------ */}
              <section class="container mt-5">
                <div className="row">
                  <div className=" col-sm-12 col-md-4">
                    <h3>*Each Tiffin Box Includes</h3>
                    <p>
                      All Tiffin Box plans include Standard Quantity by default.
                    </p>

                    <h5> NO DELIVERY ON SUNDAYS</h5>
                  </div>
                  <div className=" col-sm-12 col-md-4">
                    <h3>*Standard Quantity</h3>
                    <ul>
                      <li>1 Daal</li>
                      <li>1 Curry (Veg or Non-Veg)</li>
                      <li>4 Rotiss</li>
                      <li>1 Rice Bowl or 4 more Rotis</li>
                      <li>Salad,Raita, Achaar, Desert (1 Item/day) </li>
                    </ul>
                  </div>
                  <div className="col-sm-12 col-md-4">
                    <h3>*Delivery Areas</h3>
                    <p>
                      We are currently delivering Indian Tiffins in the
                      following areas -
                    </p>
                    <p>Mumbai, Pune, Nashik, Surat, Ahamdabad</p>
                  </div>
                </div>
              </section>
              <section className="container mt-2">
                <div className="row">
                  <img src="image1.jpg" height="400" width="1350" />
                </div>
              </section>
              <section className="container mt-5">
  <h2>*Special Food Containers</h2>
  <p>
    Carrying forward our values of staying sustainable and being environment friendly,
    we deliver food in our Special Food Containers which keep food fresh and hot for upto 4 hours
  </p>
  <div className="row justify-content-center">
    <div className="col-sm-12 col-md-12">
      <div style={{ textAlign: "center" }}>
        <img className="img-fluid" src="image7.jpg" alt="Responsive Image" />
      </div>
    </div>
  </div>
</section>

                
            
            </div>

            {/***------------------------------------------------------------- */}
            {/* <div className="col-sm-12 col-md-4">
                {/* <Card style={{ width: "18rem" }}> 
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?pid=ImgDet&rs=1"
                />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                {/* </Card> 
              </div>
              <div className="col-sm-12 col-md-4">
                {/* <Card style={{ width: "18rem" }}> 
                <Card.Img
                  variant="top"
                  src="https://th.bing.com/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?pid=ImgDet&rs=1"
                />

                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Cras justo odio</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
                {/* </Card> 
              </div>
            </div>
          */}
          </section>
        </container>
      </main>

      <footer className="py-4 bg-dark text-white">
        <container>
          <section>
            <div className="row">
              <div className="col-md-4">
                <h3>About Us</h3>
                <p>
                  Join us in this culinary journey as we connect you with
                  talented home chefs, bring joy to your dining experience, and
                  simplify your daily routine. Experience the convenience,
                  variety, and quality of Online Tiffin Booking, and let us take
                  care of your meals while you focus on what matters most to
                  you.
                </p>
              </div>
              <div className="col-md-4">
                <h3>Services</h3>
                <ul>
                  <li>Tiffin Delivery</li>
                  <li>Customizable Menu</li>
                  <li>Special Diet Options</li>
                </ul>
              </div>
              <div className="col-md-4">
                <h3>Contact Us</h3>
                <p>123 Tiffin Street, City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: 123-456-7890</p>
              </div>
            </div>
          </section>
        </container>
        <container>
          <p className="text-center">Copyright@2023</p>
        </container>
      </footer>
    </>
  );
}

export default Homepage;
