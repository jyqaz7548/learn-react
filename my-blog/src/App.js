import './App.css';
import basic_profile from './assets/basic_profile.png';




function App() {
  return (
  <div>
    <div className='menu'>
      <h1 className='title'>고양이 블로그</h1>
      <img src={basic_profile} alt="12" className='basic_profile_img' />
      <div className='line'></div>
      <span className='welcome'>안녕하세요,<br/> 고양이 블로그입니다.</span>
    </div>
  </div>
  );
}
export default App;
