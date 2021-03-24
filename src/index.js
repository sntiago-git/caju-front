import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));



/*function Tick(props) {
  return (
    <div>
      <h1>Hello, {props.name}</h1>
      <h2>The Time is: {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
}

function Avatar(props) {

  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}

function UserInfo(props) {

  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author}/>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}

const comentario = {
  date:"2017",
  text:"Ivan duque x100pre",
  author:{
    name:"Uribe",
    avatarUrl:"https://placekitten.com/g/64/64"
  }
};

function Aplicacion() {

  return (
    <div>
      <Tick name="Felipe" />
      <Tick name="German" />
      <Tick name="Luisa" />
    
      <Comment 
        author = {comentario.author} 
        text = {comentario.text} 
        date = {comentario.date} />

    </div>
  );
}

setInterval(() => {
  ReactDOM.render(<Aplicacion />, document.getElementById('root'));
}, 100);
*/


