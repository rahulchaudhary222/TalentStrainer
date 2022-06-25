import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const sendMail =()=>{
    axios({
      method: 'post',
      url: `https://app.mailgun.com/app/sending/domains/sandbox5893805579134310b6a59974a51f81e5.mailgun.org/messages`,
      auth: {
          username: 'api',
          password: "fa6701d05bfa1189ecea6b8d55f3cd31-4f207195-73a961da"
      },
      params: {
          from: 'Rahul Sandbox <postmaster@sandbox5893805579134310b6a59974a51f81e5.mailgun.org>',
          to: "faaltukaamk@gmail.com",
          subject: 'Hello',
          text: 'Welcome to the team!'
      }
  }).then(
      response => {
          console.log(response)
      },
      reject => {
          console.log(reject)
      }
  )
  }
	
  return (
    <div className="App">
      hello
      <button onClick = {()=> sendMail()}>send</button>
    </div>
  );
}

export default App;
