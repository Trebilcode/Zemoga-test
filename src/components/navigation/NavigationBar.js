import styled from 'styled-components';


export const NavigationBar = styled.nav`
  font-family: 'Lato', sans-serif;
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 20%;   

    ul {
      display: flex;
      align-items: baseline;
      justify-content: flex-end;
      height: 15%;
      width: 50%;
      padding-right: 128px;

        .trials {
          position: absolute;
          right:35%;
          z-index: 300;
          font-size: 15px;
          list-style: none;
          color: white;
          padding: 23.5px;
        }

        .howItWorks {
          position: absolute;
          right: 25%;
          z-index: 300;
          font-size: 15px;
          list-style: none;
          color: white;
          padding: 23.5px;
        }

        .loginInAndOut {
          position: absolute;
          right: 15%;
          z-index: 300;
          font-size: 15px;
          list-style: none;
          color: white;
          padding: 23.5px;
          margin: 0 0;
        }       
        
        img {
          margin: 3.5% 0;
          width: 24px;
          height: 26px;
        }        
      }  
    }  
`;