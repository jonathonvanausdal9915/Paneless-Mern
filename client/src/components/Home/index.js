
import ImageSlider from './ImageSlider';
import image1 from '../../assets/images/paneless5.jpeg'
import image2 from '../../assets/images/example5.png'
import image3 from '../../assets/images/paneless1.jpeg'
import image4 from '../../assets/images/paneless2.jpeg'
import image5 from '../../assets/images/paneless3.jpeg'
import image6 from '../../assets/images/review.png'
import image7 from '../../assets/images/after-1.png'
import image8 from '../../assets/images/after-2.png'
import image9 from '../../assets/images/before-1.png'
import image10 from '../../assets/images/before-2.png'
import {NavLink,} from 'react-router-dom'
import logo from '../../assets/images/transparent.png'
import { faAddressBook,faEnvelope,faCalendar} from '@fortawesome/free-solid-svg-icons'
import { faFacebook,faInstagram } from "@fortawesome/free-brands-svg-icons"
import {GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import './index.scss'
import { faMapLocationDot,faLocationDot,faContactCard,faPhone,faStar} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const slides = [
    {image: image1 },
    {image: image2 },
    {image: image3 },
    {image: image4 },
    {image: image5 },
];
const containerStyles = {
    width: '100%',
    height: '90vh',
    margin:'auto',
    paddingBottom:'25px',
    
   

   
};


const Home = () => {
    const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });

if (!isLoaded) return <div>Loading...</div>

function Map() {
    return <GoogleMap  zoom={10} center={{lat: 40.3769, lng: -111.7958}} mapContainerClassName='map-container'>
        <Marker position={{ lat:40.3769, lng: -111.7958}} />
    </GoogleMap>
}
return (
    
   <div>
        <br />
        <br />
      
        <div style={containerStyles}>
        <ImageSlider slides={slides} />
        
        
        </div>
        <section className="about-us" id='about'>
            <div className="about-box">
              <img alt="placeholder" src={image5} className="image-5" />
            </div>
            <div className="about-box1">
                <div className="about-box2">
                    <h2 className="abouth2">ABOUT US</h2>
                    <p className="ptag2">What started as three teenagers washing windows to save money for church missions
                    has evolved into a passion for cleaning windows and keeping happy customers!
                    </p>
                </div>
                
            </div>
        </section>
        <br />
        < hr className="hr" />
        <br />
        <div className="reviews">
            <div className="review-box">
                <div className="review-box2">
                <i><FontAwesomeIcon className="stary" icon={faStar} size="2x"color="orange"/></i>
                <i><FontAwesomeIcon className="stary" icon={faStar} size="2x"color="orange"/></i>
                <i><FontAwesomeIcon className="stary" icon={faStar} size="2x"color="orange"/></i>
                <i><FontAwesomeIcon className="stary" icon={faStar} size="2x"color="orange"/></i>
                <i><FontAwesomeIcon className="stary" icon={faStar} size="2x"color="orange"/></i>
                
                

                        <p className="ptag3">"Nick and the whole crew of Paneless Windows were awesome, friendly, efficient, thorough, and professional.
                         Highly recommend to all. Do yourself a favor and let them put the sparkle back in your windows."
                         <br />
                         -Paul Graham
                         </p>
                         
                </div>
            </div>
            <div className="review-box1">
                <img alt="placeholder"src={image6} className="image-6" />
            </div>
        </div>
        < br />
        <br />
        <div className="featured" id="featured">
            <h2 className="featuredh2">Featured</h2>
            <div className="featured-projects">
                
                <div>
                    <h2 className="before-after">Before</h2>
                    <img className="before-1" src={image9} alt="placeholder"></img></div>
                <div>
                    <h2 className="before-after">After</h2>
                    <img className="after-1"src={image7} alt="placeholder"></img>
                </div>
                <div>
                    <h2 className="before-after">Before</h2>
                    <img className="before-2"src={image8} alt="placeholder"></img>
                </div>
                <div>
                    <h2 className="before-after">After</h2>
                    <img className="after-2"src={image10} alt="placeholder"></img>
                </div>
            </div>
        </div>
        <br />
        <h2 className="whats-h2"><b>What's Next?</b></h2>
        
        <br />
        <br />
        <div className="whats-next">
            <div className="box-1">
                <div className="icon-1"><i><FontAwesomeIcon  className="icon-1x" icon={faLocationDot} size="6x"color="#0074B7"/></i></div>
                <br />
              
                <p>Tell us about your windows, service address, and contact info.</p></div>
            <div className="box-2">
                <div className="icon-2"><i><FontAwesomeIcon className="icon-1x" icon={faContactCard} size="5x" color="#0074B7"/></i></div>
                <br />
                <p>We contact our professionals and find the best one for you.</p></div>
            <div className="box-3">
                <div className="icon-3"><i><FontAwesomeIcon  className="icon-1x"icon={faPhone} size="5x"color="#0074B7"/></i></div>
                <br />
               <p> One of our skilled pros will be in touch with you to get started.</p></div>
        </div>
        <br />
        <br />
        <div className="button-margin">
          <NavLink exact="true" activeclassname="quotebtn" to='/quote'>
                                        
            <button className="request-btn1">Request Quote</button>
                                     </NavLink>
        </div>
        <br />
       
        < hr className="hr" />
        <br />
        <br />
       
       
        <div className="map-section">
        
           
        <Map /> 
       
       
        

        <div className="map-box">
            <br />
           
            <h2 className="h2">Our service areas</h2>
            <br />
            <br />
            <br />
            
            <section className="service-area">
            
      
            <div className="area-1">  <ul className="no-bullets">
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;American Fork</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Lehi</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Highland</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Alpine</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Orem</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Provo</li>
            </ul></div>
           <div className="area-2">
           <ul className="no-bullets">
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Sandy</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Bluffdale</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Pleasant Grove</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;South Jordan</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Riverton</li>
                <li><FontAwesomeIcon icon={faMapLocationDot} color="#0074B7"/> &nbsp;Salt Lake</li>
            </ul>

           </div>
        </section> 
        </div>
        </div>
       
    <br />
    <br />
    <br />
    <br />
  
    </div>
    
   
   

)
}
export default Home