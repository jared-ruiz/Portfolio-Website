import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

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
                <h1 className='title has-text-weight-bold has-text-centered'>Links</h1>
                <a href='https://github.com/jared-ruiz' target='_blank' className="button mb-4 link-buttons has-text-weight-bold"><span>GitHub</span><span className='icon'><FaGithub/></span></a>
                <a href='https://www.linkedin.com/in/jaredruiz/' target='_blank' className="button link-buttons has-text-weight-bold"><span>LinkedIn</span><span className='icon'><FaLinkedin/></span></a>
            </div>

            <div className='column mt-6'>
            <h1 className='title has-text-weight-bold has-text-centered'>Let's Get In Touch!</h1>
                <form  ref={form} onSubmit={sendEmail} className="box">

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