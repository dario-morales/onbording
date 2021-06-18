import React from 'react';

const Footer = ({align}) => {
  return (
    <div className="advice" >
      <pichincha-typography variant='smallText' align={align} color='darkGrey' weight='normal' weight_color='500' >
        { `© ${ new Date().getFullYear() }    `}<span>Banco Pichincha. Todos los derechos reservados</span>
      </pichincha-typography>
    </div>
  );
};

export default Footer;
