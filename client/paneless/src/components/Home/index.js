
import ImageSlider from './ImageSlider';
import image1 from '../../assets/images/aboutus.jpeg'
import image2 from '../../assets/images/example5.png'
import image3 from '../../assets/images/paneless1.jpeg'
import image4 from '../../assets/images/paneless2.jpeg'
import image5 from '../../assets/images/paneless3.jpeg'

const slides = [
    {image: image1 },
    {image: image2 },
    {image: image3 },
    {image: image4 },
    {image: image5 },
];
const containerStyles = {
    width: '100%',
    height: '80vh',
    margin:'auto',
   
};
const Home = () => {
return (
   <div>
        <br />
        <br />
      
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        <div className="testing">here i am</div>
        </div>
    </div>

)
}
export default Home