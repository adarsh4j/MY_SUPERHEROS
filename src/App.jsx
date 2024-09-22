import Click from './batman/click.jsx';  // Correctly import handleClick as a named import
import style from '../src/components/index.module.css'
import profile from '/batman.jpeg'
import profile1 from '/sup.jpg'
import handleSupermanClick from './superman/supclick.jsx';
import profile2 from '/flash.png'
import handleflashClick from './Flash/flashclick.jsx'
import videobg from'/film.mp4'
import profile3 from '../public/Darth Vader.jpeg'
import handlecyborgClick from './cyborg/cclick.jsx';
function App() {
  return (
    <>
    <video className={style.videoBackground} src={videobg} autoPlay loop muted />
    <div className='contenet'>
    <h2><span className={style.highlight}>More</span> about <span className={style.highlight1}>my</span> <span className={style.highlight2}>Superheros</span></h2>
    <div className={style.cardContainer}> 
    <div className={style.card}>
         <img src={profile} alt="My profile pic" width="45px" height="50px" />
         <h3>BATMAN</h3>
         <p>Batman is the alias of Bruce Wayne, a wealthy American playboy, philanthropist, and industrialist living on the outskirts of Gotham City in Wayne Manor. To avoid suspicion, he presents himself as a  playboy who enjoys his family's wealth and the profits of Wayne Enterprises.</p>
         <div className={style.button}>
      <button onClick={Click}><span className={style.button3}>More about them</span></button>  {/* Use handleClick here */}
    </div>
    </div>
    <div className={`${style.card} ${style.supermanCard}`}>
         <img src={profile1} alt="My profile pic" width="45px" height="50px" />
         <h3>SUPERMAN</h3>
         <p >Superman, born Kal-El, is from the fictional planet Krypton. His parents, Jor-El and Lara, sent him to Earth in a small spaceship just before Krypton's destruction. The ship landed near Smallville, Kansas, where farmers Jonathan and Martha Kent found and adopted him, naming Clark Kent.</p>
         <div className={style.button}>
         <button onClick={handleSupermanClick}><span className={style.button3}>More about them</span></button> {/* Use handleSupermanClick here */}
         </div>
    </div>
    <div className={`${style.card} ${style.flashCard}`}>
         <img src={profile2} alt="My profile pic" width="45px" height="50px" />
         <h3>Flash</h3>
         <p >Jay Garrick was a college student in 1938 who inhaled heavy water vapors in his lab while taking a smoke break. This accident gave him the ability to run at superhuman speed and enhanced reflexes.  His first case involved battling the "Faultless Four", a group of blackmailers. </p>
         <div className={style.button}>
         <button onClick={handleflashClick}><span className={style.button3}>More about them</span></button> {/* Use handleSupermanClick here */}
         </div>
    </div>
    <div className={`${style.card} ${style.cyborgCard}`}>
         <img src={profile3} alt="My profile pic" width="45px" height="50px" />
         <h3>Cyborg</h3>
         <p >Victor Stone is the son of Silas Stone and Elinore Stone, scientists who use him as a test subject for various intelligence enhancement projects. While these treatments are ultimately successful and Victor's IQ subsequently  to genius level. </p>
         <div className={style.button}>
         <button onClick={handlecyborgClick}><span className={style.button3}>More about them</span></button> {/* Use handleSupermanClick here */}
         </div>
    </div>
  </div>
  </div>
    </>
  );
 
}

export default App;

