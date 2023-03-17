import React from 'react';
import '../Switch.css';
import Face from '../assets/images/icon-facebook.svg';
import Image from '../assets/images/icon-up.svg';
import ImageTwo from '../assets/images/icon-down.svg';
import Twit from '../assets/images/icon-twitter.svg';
import Insta from '../assets/images/icon-instagram.svg';
import You from '../assets/images/icon-youtube.svg';
import {Row,Col, Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Switch = ({ isOn, handleToggle, onColor }) => {
  return (

  <div className='bg'>

      <div className='headerText'>
      <h1>Social Media Dashboard</h1>
      <h4>Total Followers: 23,004</h4>
        </div>

    <div className='darkButton' >
    
    <h2  >Dark Mode</h2>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
    <label
  style={{ background: isOn && onColor }}
  className="react-switch-label"
  htmlFor={`react-switch-new`}
>

        <span className={`react-switch-button`} />
      </label>
    </div>

      <br />
      <br />
 <Row className='rowOne'>
  <Col>
<Card className='Card' style={{ width: '18rem' }}>
         <Card.Body>
          
               <Card.Title className='CardTitle'> <img className='img' src={Face} alt='facebook icon' /> @nathanf</Card.Title>
           <Card.Subtitle ><p>1987</p></Card.Subtitle>
           <Card.Text>
              <div> <h3>Followers </h3></div>
           </Card.Text>
            <h6 className='gText' ><img className='imgBot' src={Image} alt='up icon' />12 today</h6>
         </Card.Body>
       </Card>
      </Col>

      <Col>
      <Card className='Card' style={{ width: '18rem' }}>
         <Card.Body>
          
               <Card.Title className='CardTitle'> <img className='img' src={Twit} alt='twitter icon' /> @nathanf</Card.Title>
           <Card.Subtitle ><p>1044</p></Card.Subtitle>
           <Card.Text>
               <div><h3>Followers </h3></div>
           </Card.Text>
            <h6 className='gText' ><img className='imgBot' src={Image} alt='up icon' />99 today</h6>
         </Card.Body>
       </Card>
       </Col>


       <Col>
       <Card className='CardTwo' style={{ width: '18rem' }}>
         <Card.Body>
          
               <Card.Title className='CardTitle'> <img className='img' src={Insta} alt='instagram icon' /> @realnathanf</Card.Title>
           <Card.Subtitle ><p>11k</p></Card.Subtitle>
           <Card.Text>
               <div><h3>Followers </h3> </div>
           </Card.Text>
            <h6 className='gText' ><img className='imgBot' src={Image} alt='icon of dice' />1099 today</h6>
         </Card.Body>
       </Card>
      </Col>

      <Col>
      <Card className='CardTwo' style={{ width: '18rem' }}>
         <Card.Body>
          
               <Card.Title className='CardTitle'> <img className='img' src={You} alt='youtube icon' /> Nathan F.</Card.Title>
           <Card.Subtitle ><p>8239</p></Card.Subtitle>
           <Card.Text>
             <div> <h3>Followers </h3>  </div>
           </Card.Text>
            <h6 className='rText' ><img className='imgBot' src={ImageTwo} alt='down icon' />144 today</h6>
         </Card.Body>
       </Card>
       </Col>
    
    </Row>
    <br/>
      <br/>
      {/* --------------------------------------------------------------------------------------- */}

    <Row className='rowTwo'>
      
      <h1>OverView - Today </h1>
      
  <Col>
<Card className='CardMid' style={{ width: '18rem' }}>
<Card.Body>
          
          <Card.Title className='CardTitle'> Page Views<img className='imgTwo' src={Face} alt='facebook icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>87</h1>
            </Col>
            <Col>
           <div className='ggText'><img src={Image} alt='up icon' /> 3%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className='CardMid' style={{ width: '18rem' }}>
       <Card.Body>
          
          <Card.Title className='CardLikes'>Likes<img className='imgThree' src={Face} alt='facebook icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>52</h1>
            </Col>
            <Col>
           <div className='grText'><img src={ImageTwo} alt='up icon' /> 2%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
       </Col>


       <Col>
<Card className='CardMid' style={{ width: '18rem' }}>
<Card.Body>
          
          <Card.Title className='CardLikes'> Likes<img className='imgThree' src={Insta} alt='instagram icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>5462</h1>
            </Col>
            <Col>
           <div className='ggTextThree'><img src={Image} alt='up icon' /> 2257%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className='CardMid' style={{ width: '18rem' }}>
       <Card.Body>
          
          <Card.Title className='CardTitle'> Profile Views<img className='imgTwo' src={Insta} alt='instagram icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>87</h1>
            </Col>
            <Col>
           <div className='ggTextThree'><img src={Image} alt='up icon' /> 1375%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
       </Col>
    
    </Row>
    {/* ------------------------------------------------------------------------------------- */}
    <br/>
      <br/>
    <Row className='rowTwo'>
      
     
  <Col>
<Card className='CardBot' style={{ width: '18rem' }}>
<Card.Body>
          
          <Card.Title className='CardLikes'> Retweets<img className='imgFour' src={Twit} alt='twitter icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>117</h1>
            </Col>
            <Col>
           <div className='ggTextTwo'><img src={Image} alt='up icon' /> 303%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className='CardBot' style={{ width: '18rem' }}>
       <Card.Body>
          
          <Card.Title className='CardLikes'> Likes<img className='imgThree' src={Twit} alt='twitter icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>507</h1>
            </Col>
            <Col>
           <div className='ggTextTwo'><img src={Image} alt='up icon' /> 553%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
       </Col>


       <Col>
<Card className='CardBot' style={{ width: '18rem' }}>
<Card.Body>
          
          <Card.Title className='CardLikes'> Likes<img className='imgThree' src={You} alt='youtube icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>107</h1>
            </Col>
            <Col>
           <div className='grText'><img src={Image} alt='up icon' /> 19%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
      </Col>

      <Col>
       <Card className='CardBot' style={{ width: '18rem' }}>
       <Card.Body>
          
          <Card.Title className='CardLikes'> Total Views<img className='imgTwo' src={You} alt='youtube icon' /> </Card.Title>
          <Row>
            <Col>
            <h1 className='num'>1407</h1>
            </Col>
            <Col>
           <div className='grText'><img src={Image} alt='up icon' /> 12%</div>
            </Col>
        </Row>
      <Card.Text>
    
      </Card.Text>
       
    </Card.Body>
       </Card>
       </Col>
   
    </Row>
 <br/>

    

    </div>

    
  );
};

export default Switch;