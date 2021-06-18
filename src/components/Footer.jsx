import React,{useState, useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import IconButton from '@material-ui/core/IconButton';
import './Footer.css';
import logo from '../images/Logo.png'

const Footer = ({showBelow})=>{

  const useStyles =makeStyles((theme)=>({
    
    toTop:{
      zIndex :2,
      position: 'fixed',
      bottom: '2vh',
      backgroundColor: '#DCDCDC',
      color:'black',
      "&:hover ,&.Mui-focusVisible":{
        transition: '0.3s',
        color:'#397BA6',
        backgroundColor:'#DCDCDC'
      },
      right:'5%',
    }
  }))

  const classes = useStyles();

  const [show,setShow] = useState(showBelow ? false : true)


const handleScroll = () =>{
  if(window.pageYOffset > showBelow)
  {
    if(!show) setShow(true)
  }else{
    if(show) setShow(false)
  }
}
const handleClick = () =>{
  window[`scrollTo`]({top: 0 ,behavior:`smooth`})
}
useEffect(()=>{
  if(showBelow){
    window.addEventListener(`scroll`,handleScroll)
    return()=>window.removeEventListener(`scroll`,handleScroll)
  }
})

    return(
        <>
       <div>
         {
           show && 
           <IconButton onClick={handleClick} className={classes.toTop}>
             <ExpandLessIcon />
           </IconButton>
         }
       </div>
        
        <div className="footer">
          
            <hr style={{width:"90%"}}/>
       

            </div>
    



          <footer>

                <div className="footer-content">

                  <div style={{display:'flex',justifyContent:'center'}}>

                  
                  <img src={logo} alt="logo" style={{cursor:"pointer",width:"40px",height:"25px",marginTop:"10px",paddingRight:"5px"}}/><h3>KasturiyaNewsApp</h3>
            </div>
            <p>Fake news is cheap to produce. Genuine journalism is expensive.</p>
            <ul className="socials">
             <li><a href="https://www.instagram.com/aakashkasturiya/"><i class="fa fa-instagram"></i></a></li>
             <li><a href="https://www.linkedin.com/in/aakash-kasturiya-3b86a1115/"><i class="fa fa-linkedin-square"></i></a></li>
             <li><a href="mailto:aakashkasturiya@gmail.com"><i class="fa fa-google-plus-square"></i></a></li>
             <li><a href="https://www.facebook.com/profile.php?id=100005226137457"><i class="fa fa-facebook-square"></i></a></li>


                    </ul>
                </div>

                <div className="footer-bottom">
                <p>copyright &copy;2021 kasturiyaNewsApp. designed by aakashKasturiya@gmail.com</p>

                </div>
          </footer>

        </>
    );


}

export default Footer;