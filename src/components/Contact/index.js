import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();

        emailjs.sendForm('service_qty38dr', 'template_qtxkh51', form.current, '_vnhzELERSfYrKdZj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div className='columns'>

            <div className='column is-half mt-6'>
                <h1 className='title'>Let's Get In Touch!</h1>
                <h1 className='has-text-weight-bold'>GitHub</h1>
                <h1 className='has-text-weight-bold'>LinkedIn</h1>
            </div>

            <div className='column'>
                <form  ref={form} onSubmit={sendEmail} className="box mt-6">

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="name" name='name'/>
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" name='email'/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" name='message'/>
                        </div>
                    </div>

                    <button className="button is-dark" type='submit' value="Send">Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;