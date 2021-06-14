import Carousel from 'react-bootstrap/Carousel'

const Example = () => {
    return (
      <>
                <Carousel fade>
                        <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://wallpaper.dog/large/862483.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://nathaningram.com/wp-content/media/473246-800x400.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXQAouUrifZj5RNh-EaVLpfmN6ynJ6RJIxZhbsv_2D0TS27iXA2QBo7lU02iARj3jQW38&usqp=CAU"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>
      </>
    );
  }
  
export default Example;