import React, { useState, useEffect, useRef } from 'react';
import { Form, FormGroup } from 'rsuite';

const FormVerification = () => {
  const [int1, setInt1] = useState('');
  const [int2, setInt2] = useState('');

  const input1 = useRef();
  const input2 = useRef();

  useEffect(() => {
    const handleChange1 = (event) => {
      setInt1(event.target.shadowRoot.getElementById('idInput1').value);
      event.target.state = 'error';
    };
    const handleKeydown1  = (event) => {
      event.preventDefault();
      const keyCode = event.detail.keyCode || event.detail.which;
      const keyValue = String.fromCharCode(keyCode);
       //if (/\+|-/.test(keyValue))
         //event.preventDefault();
    };
    
    input1.current.addEventListener('ichange', handleChange1);
    input1.current.addEventListener('ikeypress', handleKeydown1);
    return () => {
      input1.current.removeEventListener('ichange', handleChange1);
      input1.current.removeEventListener('ikeypress', handleKeydown1);
    };
  }, []);

  useEffect(() => {
    const handleChange2 = (event) => {
      setInt2(event.target.shadowRoot.getElementById('idInput2').value);
      event.target.state = 'error';
    };
    input2.current.addEventListener('ichange', handleChange2);
    return () => {
      input2.current.removeEventListener('ichange', handleChange2);
    };
  }, []);

  return (
    <Form>
      <FormGroup>
        <pichincha-typography
          variant='h1'
          color='blue'
          weight='normal'
          weight_color='500'
          align='center'
        >
          Ingresa los siguientes datos
        </pichincha-typography>
      </FormGroup>
      <FormGroup>
        <pichincha-input
          ref={input1}
          id-element='idInput1'
          label='RUC de Empresa'
          placeholder='RUC de Empresa'
          normal-helper='Número de RUC incorrecto'
          error-helper=''
          value={int1}
          size='medium'
          max-length='13'
          show-icon-status='true'
          full-width
        />
      </FormGroup>
      <FormGroup>
        <pichincha-input
          label='Documento de Identidad ó Pasaporte'
          placeholder='Documento de Identidad ó Pasaporte'
          normal-helper='Número de Cédula de Identidad incorrecto'
          error-helper=''
          value={int2}
          size='medium'
          max-length='10'
          show-icon-status='true'
          full-width
          ref={input2}
          id-element='idInput2'
        />
      </FormGroup>
      <FormGroup>
        <pichincha-check-box>
          <pichincha-typography
            variant='bodyText'
            weight='normal'
            weight_color='500'
            align='inherit'
          >
            Aceptar{' '}
            <a href='#' className='link'>
              términos y condiciones
            </a>
          </pichincha-typography>
        </pichincha-check-box>
      </FormGroup>
      <FormGroup>
        <pichincha-button
          color='primary'
          size='medium'
          disabled='false'
          loading='false'
        >
          Continuar
        </pichincha-button>
      </FormGroup>
    </Form>
  );
};

export default FormVerification;
