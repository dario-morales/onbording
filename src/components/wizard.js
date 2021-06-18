import React from 'react';
import { Steps } from 'rsuite';

const Wizard = ({width, current }) => {

  return (

    <div className="wrap-step" >
      <Steps current={current}  {...( width > 960 ? {vertical: true } : {})} >
          <Steps.Item title='Identificación' />
          <Steps.Item title='Validación de Identidad' />
          <Steps.Item title='Creación de un nuevo Usuario' />
          <Steps.Item title='Creación de un nuevo Usuario' />
        </Steps>
    </div>
  
  );
};

export default Wizard;
