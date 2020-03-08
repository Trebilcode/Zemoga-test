import React, { useState } from 'react';

import { 
  NavigationBar 
} from './components/navigation/NavigationBar';

import { 
  InfoAboutBlurredContainer,
  Polygon,
  PolygonRight, 
  Triangle, 
  ThumbsRectangle, 
  ThumbsAndBlurredContainer, 
  Thumb,

} from './components/Main';

import popeImage from '../src/assets/imgs/pope.png'
import thumbsUp from '../src/assets/imgs/thumbsUp.png';
import thumbsDown from '../src/assets/imgs/thumbsDown.png';
import searchImage from '../src/assets/imgs/search.png';
import wikiLogo from '../src/assets/imgs/Wiki.png';
import { StyledHome } from './components/Home';


const App = () => {

  // const [className, setClassName] = useState( 
  //   'trials',
  //   'howItWorks',
  //   'loginInAndOut'
  // );

  // console.log(className);

  // const [liText, setLiText] = useState(
  //   'Past Trials',
  //   'How it Works',
  //   'Login/SignUp'
    
  // );

  // const [links, setLinks] = useState(
  //   '/past-trials',
  //   '/how-it-works',
  //   '/log-in-sign-up'
  // );


  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  // // let routes = (
  // //   <div>
  // //     <Route path='/' exact component={<h1>jancvpiafv</h1>} />
  // //     <Route path='/auth' exact render={<h1>hola</h1>} />
  // //     <Redirect to='/' />
  // //   </div>

  // // )

  // // const navigationItems = className.map((arrayElement, index)=> (
  // //   <NavigationItem isAuthenticated={isUserLoggedIn} exact link={links[index]} className={arrayElement}>{liText[index]}</NavigationItem>
  // // ));
  return (    
    <div>
      <header>      
        <NavigationBar>
          <StyledHome><p>Rule of Thumb</p></StyledHome>
           <ul>
            <li className={'trials'}>Past Trials</li>
            <li className={'howItWorks'}>How It Works</li>
            <li className={'loginInAndOut'}>Log In/SignUp</li>
            <img src={searchImage} />

          </ul>       
           

          
        </NavigationBar>
      </header>
      <main className={'main-content'}>

        <div className={'popeImageContainer'}>
          <img id={'pope'} src={popeImage} />
        </div>

        <ThumbsAndBlurredContainer>
          <InfoAboutBlurredContainer>
            <p className={'opinion'}>What's your opinion on</p> <br></br>
            <h1 className={'title'}>Pope Francis?</h1>
            <br></br>
            <p className={'paragraph'} >He's talking tough on clergy sexual abuse, <br></br> but is he just another papal pervert <br></br> protector?
            (thumbs down) or a true <br></br> pedophile punishing pontiff? (thumbs up)
            </p>
            <div className={'logoAndInfoContainer'}>
              <img src={wikiLogo} />
              <p><a href='https://www.google.com'>More information</a></p>
            </div>
            <h3 className={'subtitle'}>What's Your Verdict?</h3>          
          </InfoAboutBlurredContainer>

          <ThumbsRectangle blue>
            <Thumb src={thumbsUp} />          
          </ThumbsRectangle>       
          <ThumbsRectangle>
            <Thumb src={thumbsDown} />
          </ThumbsRectangle>          
        </ThumbsAndBlurredContainer>       
        
        <Polygon>
          <p>CLOSING IN</p>
        </Polygon>
        <PolygonRight>
          <p>22 <span>days</span> </p>
        </PolygonRight> 
        <Triangle />
      </main>
    </div>
    
    
  );
}

export default App;