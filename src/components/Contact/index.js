import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        
        e.preventDefault();

        emailjs.sendForm('gmail', 'template_qtxkh51', form.current, '_vnhzELERSfYrKdZj')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    }
    
    return (
        <div className='columns'>

            <div className='column is-half'>
                <h1 className='title'>Links</h1>
                <h1 className='has-text-weight-bold'>GitHub</h1>
                <h1 className='has-text-weight-bold'>LinkedIn</h1>
            </div>

            <div className='column'>
                <h1></h1>
                <form  ref={form} onSubmit={sendEmail} class="box mt-6">

                    <div class="field">
                        <label class="label">Name</label>
                        <div class="control">
                            <input class="input" type="name"/>
                        </div>
                    </div>
                    
                    <div class="field">
                        <label class="label">Email</label>
                        <div class="control">
                            <input class="input" type="email"/>
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Message</label>
                        <div class="control">
                            <textarea class="textarea"/>
                        </div>
                    </div>

                    <button class="button is-dark" type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}

export default Contact;