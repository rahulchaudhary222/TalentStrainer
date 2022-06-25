import './App.css';
import emailjs from 'emailjs-com'
import React , {useRef} from 'react';

function App() {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_mlnhk8a","template_czehp1f", form.current, "gna_OGLQ8is6lv4DQ")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
	
  return (
    <div className="App">
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Phone</label>
      <input type="number" name="user_phone" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
}

export default App;
