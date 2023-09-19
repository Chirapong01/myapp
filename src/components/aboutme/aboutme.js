import { useEffect, useRef, useState } from 'react';
import './abut.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import { TypeAnimation } from 'react-type-animation';
import { InView } from 'react-intersection-observer';

function AboutMe() {
    const [inView, setInView] = useState(false);
    const message = 'lorem ipsum dolor sit amet, consectet '
    let key = 1
    useEffect(() => {
    });
    if (inView) {
        key = 0;
    }
    return (
        <div className="aboutme flex items-center">
            <div className="text-white font-bold  w-2/4">
                <InView onChange={setInView}>
                    <div className=' ml-48 m-auto '>
                        <div className='text-neon text-5xl'> My lorem </div>
                        <div className='text-neon text-4xl mt-6'>
                            <TypeAnimation key={key} sequence={message} speed={50} repeat={1} />
                        </div>
                        <div>
                            <a href="#" >
                                <MailOutlineIcon className='mt-6 icon-neon' sx={{ fontSize: 26 }} />
                            </a>
                            <a href="#" >
                                <GitHubIcon className='mt-6 ml-6 icon-neon' sx={{ fontSize: 26 }} />
                            </a>
                            <a href="#" >
                                <YouTubeIcon className='mt-6 ml-6 icon-neon' sx={{ fontSize: 26 }} />
                            </a>
                            <a href="#" >
                                <FacebookIcon className='mt-6 ml-6 icon-neon' sx={{ fontSize: 26 }} />
                            </a>
                        </div>
                    </div>
                </InView>
            </div>
            <div className="text-white w-2/4">
                <img className='w-2/4' src="/images/ppl05.png" />
            </div>
        </div >
    )
}
export default AboutMe;
