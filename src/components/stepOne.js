import React from 'react';
import Wizard from './wizard';
import useWindowDimensions from '../helper/windowDimensions' ;
import FormVerification from './form';
import Footer from './footer';


export const StepOne = () => {

const { width } = useWindowDimensions();  

  return (
    <div className='grid-container'>
      <div className='grid-item wrap-wizard' >
        <div className='elem'>
          <div className='logo'>
            <pichincha-brand type='logo' color='primary' width='220' ></pichincha-brand>
          </div>
          {  width > 960 &&  
             <pichincha-typography variant='h3' color='blue' weight='normal' weight_color='500' class={"step-title"}  >
               Sigue los siguientes pasos para completar tu registro en Banca Empresas
              </pichincha-typography> 
          }
          <Wizard width={width} current={0} > </Wizard>
          {  width > 960 &&  <Footer align="left" ></Footer>  }
        </div>
      </div>
      <div className='grid-item wrap-form' >
        <div className='elem '>
            <FormVerification></FormVerification>
            {  width < 960 &&  <Footer align="center" ></Footer>  }
         </div>
         
      </div>
    </div>
  );
};

export default StepOne;
