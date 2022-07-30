import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import { validateEmail } from '../../utils/helpers';

const Contact = () => {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');

    // const form = useRef();
    
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_qty38dr', 'template_qtxkh51', e.target, '_vnhzELERSfYrKdZj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

            if (!isValid) {
                setErrorMessage('email is invalid!');
            }
            else {
                setErrorMessage('');
            }
        }
        else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required`)
            }
            else {
                setErrorMessage('');
            }
        }

        if(!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value})
            console.log(formState)
        }

        console.log('errorMessage:', errorMessage);

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
                <form onSubmit={sendEmail} className="box">

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input className="input" type="name" name='name' onBlur={handleChange}/>
                        </div>
                    </div>
                    
                    <div className="field">
                        <label className="label">Email</label>
                        <div className="control">
                            <input className="input" type="email" name='email' onBlur={handleChange}/>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Message</label>
                        <div className="control">
                            <textarea className="textarea" name='message' onBlur={handleChange}/>
                        </div>
                    </div>

                    {/* error messages for email auth */}
                    {errorMessage && (
                        <div>
                            <p className='error-text pb-3'>{errorMessage}</p>
                        </div>
                    )}

                    <input className="button is-dark" type='submit' value="Send" Send />
                </form>

            </div>
        </div>
    )
}

export default Contact;