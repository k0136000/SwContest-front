import './index.css';
import imB from "./black.png"

function log() {
  return (
    <>
    <div className='jo'>봐라오케</div>
    <ul>
      <li>
        <button className='wo'>로그인</button>
        </li>
     <li>
     <button className='wo'>로그인</button>
     </li>
     <li>
     <a lang='' className='mo'>회원가입</a>
     </li>
     <li>
     <input className='lo' type={'email'} placeholder='이메일주소'></input>
     </li>
    <li>
    <input className='password' type={'password'} placeholder='비밀번호'></input>
    </li>
     <img className='ip' src={imB} ></img>
   </ul>
     
   
    </>
  );
}


export default log;