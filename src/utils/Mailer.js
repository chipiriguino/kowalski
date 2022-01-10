import React from 'react';
import emailjs from 'emailjs-com';
import './Mailer.css';

const Mailer =()=>{
    function sendEmail(e) {
        e.preventDefault();
       

        emailjs.sendForm('service_fxqdar7','template_f9p5l1e',e.target,"user_AHhPpfn70SF6s1ohuMSvd").then(res=>{
            console.log(res);
            window.location.reload();
            alert("mensaje enviado con éxito, en breve recibirá una confirmación de su pedido. Gracias")

        }).catch(err=> console.log(err));
    }
    return(
        <div>
            <form className="form-flex" onSubmit={sendEmail}>
            <h1 className="h2 mb-4">Contacta en unos pocos pasos:</h1> <br/>
         
                <label>Nombre</label>
                <input className="input-size" type="text" name="name" />

                <label>Teléfono</label>
                <input className="input-size" type="number" name="number" />

                <label>EMAIL</label>
                <input  className="input-size" type="email" name="user_email" />

                <label>Su mensaje</label>
                <textarea className="text-size" name="message" rows="2" />
                <input className="btn-form" type="submit" value="Enviar" />


            </form>
        </div>
    );
};
export default Mailer;