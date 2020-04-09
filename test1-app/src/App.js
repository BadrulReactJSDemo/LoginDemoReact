
/*import React from 'react';
import './App.css'
export default class App extends React.Component
{
  render()
  {
    return(
      <div className='App'>
        <fieldset>
          <legend>Login</legend>
          <input type='text' name='uname' ref='uname'placeholder='enter user name' ></input>
          <br></br>
          <input type='password' name='upwd' ref='upwd' placeholder='enter password'></input>
          <br></br>
          <input type='submit' onClick={this.getFun}></input>
        </fieldset>
      </div>
    )
  }
  getFun=()=>
  {
    let uname=this.refs.uname.value
    let upwd=this.refs.upwd.value
    if ((uname==='admin') && (upwd==='admin'))
    {
      alert('login sucessfully')
    }
    else{
      alert('login fail')
    }
  }
}
*/

import React from 'react';
import './App.css';
export default class App extends React.Component
{
  render()
  {
    return(
      <div className='App'>
        <fieldset>
          <legend>login Form</legend>
          <input type='text' name='uname' ref='uname' placeholder='enter username'/>
          <br></br>
          <input type='password' name='upwd' ref='upwd' placeholder='enter password'/>
          <br></br>
          <button onClick={()=>{this.funLogin("admin","facebook")}}> SignIn</button>
        </fieldset>

      </div>
    )
  }
  funLogin=(arg1,arg2)=>{
    let uname=this.refs.uname.value
    let upwd=this.refs.upwd.value
    
    if ((arg1===uname) && (arg2===upwd))
    {
      alert('login sucessfully')
    }
    else{
      alert('login fail')
    }
  }
}

/*
import React from 'react';
import './App.css'
export default class App extends React.Component
{
  render()
  {
    return(
      <div className="App">
        <fieldset>
          <legend>Login Page</legend>
          <br></br>
          <input type='text' name='uname' ref='uname' placeholder='enter username'/>
          <br></br>
          <input type='password' name='upwd' ref='upwd' placeholder='enter password'/>
          <br></br>
          <button onClick={()=>{this.getMethod('reactjs','facebook')}}>login</button>
        </fieldset>

      </div>
    )
  }
  getMethod=(arg1,arg2)=>
  {
    let uname=this.refs.uname.value
    let upwd=this.refs.upwd.value
    if(arg1===uname && arg2===upwd)
    {
      alert('login sucessfully')
    }
    else
    {
      alert('login fail')
    }
  }
}

import React from 'react';
import './App.css';
export default class App extends React.Component
{
  render()
  {
    return(
      <div className="App">
        <fieldset>
          <legend>Registion Page</legend>
          <br></br>
          <form onSubmit={this.funMethod}>
            <input type='text' name='uname' ref='uname' placeholder='enter username'/>
            <br></br><br></br>
            <input type='password' name='upwd' ref='upwd' placeholder='enter password'/>
            <br></br><br></br>
            <input type='date' name='dob' ref='dob' placeholder='enter DOB'/>
            <br></br><br></br>
            <textarea cols='20' rows='7' name='add' ref='add'></textarea>
            <br></br><br></br>
            <input type='submit' />


          </form>
        </fieldset>

      </div>
    )
  }
  funMethod=(event)=>
  {
    event.preventDefault()
    let uname=this.refs.uname.value
    let upwd=this.refs.upwd.value
    let dob=this.refs.dob.value
    let add=this.refs.add.value
    console.log(uname,upwd,dob,add)
  }


}*/