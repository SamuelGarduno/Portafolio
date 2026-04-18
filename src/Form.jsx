import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const honeypotStyle = { display: 'none' };

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (e.target.address.value) {
      console.log("Bot detectado");
      return; 
    }

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
        console.log('Mensaje enviado:', result.text);
        alert('Mensaje enviado con éxito');
        e.target.reset(); 
    }, (error) => {
        console.log('Error:', error.text);
        alert('Hubo un error al enviar el mensaje');
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="address" style={honeypotStyle} tabIndex="-1" autoComplete="off" />
      <label>Nombre</label>
      <input type="text" name="from_name" placeholder='Nombre' required />
      
      <label>Email</label>
      <input type="email" name="from_email" placeholder='correo@gmail.com' required />
      
      <label>Mensaje</label>
      <textarea name="message" placeholder='Mensaje' required />
      
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;