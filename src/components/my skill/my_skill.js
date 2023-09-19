import { useEffect, useState } from 'react';
import './my_skill.css'
import { InView } from 'react-intersection-observer';
import { Grid } from '@mui/material';

function My_Skill() {

   const [inView, setInView] = useState(false)

   useEffect(() => {
      let img = document.querySelectorAll('#img');
      if (inView) {
         img.forEach(element => {
            element.classList.remove('fade-left');
         });
      } else {
         img.forEach(element => {
            element.classList.add('fade-left');
         });
      }
   })
   return (
      <div id='myskill' className='myskill'>
         <InView onChange={setInView} delay={200}>
            <div className=' ml-48 w-3/4'>
               <h4 className=' text-white text-4xl'> loremd</h4>
               <div className='mt-12'>
                  <Grid container spacing={0}>
                     <Grid id='img' className='fade-left transition-all duration-200' item xs={1} >
                        <img className=' w-12 ' src='./images/Angular_full_color_logo.svg.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-300' item xs={1}>
                        <img className=' w-12 ' src='./images/png-transparent-game-react-native-javascript-android-physics-symmetry-web-application-vuejs-thumbnail.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-500' item xs={1}>
                        <img className=' w-12 ' src='./images/png-transparent-laravel-hd-logo.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-700' item xs={1}>
                        <img className=' w-12 ' src='./images/NET_Core_Logo.svg.png' />
                     </Grid>
                  </Grid>
               </div>
               <div className='mt-5'>
                  <Grid container spacing={0}>
                     <Grid id='img' className='fade-left transition-all duration-200' item xs={1}>
                        <img className=' w-12 ' src='./images/732212.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-300' item xs={1}>
                        <img className=' w-12 ' src='./images/CSS3_logo.svg.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-500' item xs={1}>
                        <img className=' w-12 ' src='./images/png-transparent-javascript-logo-angularjs-nodejs-computer-programming-web-development-computer-software-jquery-yellow.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-700' item xs={1}>
                        <img className=' w-14 ' src='./images/png-transparent-logo-php-html-others-text-trademark-logo-thumbnail.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-1000' item xs={1}>
                        <img className=' w-16 ' src='./images/Csharp_Logo.png' />
                     </Grid>
                  </Grid>
               </div>
               <div className='mt-5'>
                  <Grid container spacing={0}>
                     <Grid id='img' className='fade-left transition-all duration-200' item xs={1}>
                        <img className=' w-14 mt-2' src='./images/png-transparent-mysql-php-database-javascript-ajax-carnifex-blue-text-logo.png' />
                     </Grid>
                     <Grid id='img' className='fade-left transition-all duration-300' item xs={1}>
                        <img className=' w-12 ' src='./images/png-transparent-mongodb-database-nosql-postgresql-mongo-text-logo-business-thumbnail.png' />
                     </Grid>
                  </Grid>
               </div>
            </div>
         </InView>
      </div>
   )
}
export default My_Skill

