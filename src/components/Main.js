import styled from 'styled-components';


export const ThumbsAndBlurredContainer = styled.div`
  width: 500px;
  height: 370px;
  position: absolute;
  background: rgba(163, 163, 163, .2);
  box-shadow: inset 0 0 2000px 20px rgb(0, 0, 0, .5);
  -webkit-backdrop-filter: blur(30px);
  backdrop-filter: blur(30px);  
  top: 170px;
  left: 132px;
`;

export const InfoAboutBlurredContainer = styled.div`
  font-family: 'Lato', sans-serif;
  font-weight: 100;
  color: white;
  text-align: justify;
  padding: 2% 0 2% 4%;
  
    .title {
      margin-top: -7%;
      margin-bottom: 0;
      font-family: sans-serif;
      font-weight: 10;
      font-size: 3em;
    }
    
    .paragraph {
      margin-top: 0;
      text-align: left-center;
      font-size: 1.4rem;
    } 

    .logoAndInfoContainer{
      display: flex;
      align-items: baseline;

      a {
        padding-left: 10px;
        font-size: 1rem;
        text-decoration: underlined;
        color: white;
      }
      
      h3 {
        color: white;
    }
    }   
  
      
`;

export const ThumbsRectangle = styled.div`
  display: flex;
  position: absolute;
  bottom: -80px;
  width: 250px;
  height: 80px;
  background: ${props => props.blue ? 'rgba(44, 187, 180, .8)' : 'rgba(255, 181, 51, .8)'};
  margin-left: ${props => props.blue ? 0 : '250px'};
  justify-content: center;
  align-items: center;
`;

export const Thumb = styled.img`
width: 36px;
height: 37px;
align-items: center;  
`;

export const Polygon = styled.div`
  justify-content: right;
  align-items: center;
  width: 404px;
  height: 50px;
  position: absolute;
  z-index: 500;
  top: 690px;
  background: rgba(120, 110, 109, 0.3);

    p {
      color: white;
      float: right;
      margin-right: 12px;
    }
`;

export const PolygonRight = styled.div`
  justify-content: left;
  align-items: center;
  width: 811.5px;
  height: 50px;
  position: absolute;
  z-index: 499;
  right: 0;
  top: 690px;
  background: rgba(245, 245, 245, 0.8);

    p {
      color: black;
      font-weight: bold;
      font-size: 2.5em;
      float: left;
      margin: 0;
      margin-left: 24px;

        span {
          font-weight: 100;   
        }
    }
`;

  export const Triangle = styled.div`
    position: absolute;
    z-index: 500;
    top: 706px;
    left: 404px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-left: 15px solid rgba(120, 110, 109, 0.5);
    border-bottom: 10px solid transparent;      
`;