import { InView } from 'react-intersection-observer'
import './my_endu.css'
import { useEffect, useState } from 'react'


function My_Endu() {
    const [inViewEdu1, setInViewEdu1] = useState(false)
    const [inViewEdu2, setInViewEdu2] = useState(false)
    const [inViewEdu3, setInViewEdu3] = useState(false)
    const [inViewEdu4, setInViewEdu4] = useState(false)
    useEffect(() => {
        let tx1 = document.querySelectorAll('#tx1');
        (inViewEdu1) ? tx1[0].classList.remove('fade-left') : tx1[0].classList.add('fade-left');
        (inViewEdu2) ? tx1[1].classList.remove('fade-right') : tx1[1].classList.add('fade-right');
        (inViewEdu3) ? tx1[2].classList.remove('fade-left') : tx1[2].classList.add('fade-left');
        (inViewEdu4) ? tx1[3].classList.remove('fade-right') : tx1[3].classList.add('fade-right');
    })
    
    return (
        <div className="my-endu">
            <div className=' flex justify-center text-5xl'>
                <InView onChange={setInViewEdu1} delay={200}>
                    <div id='tx1' className='fade-left transition-all duration-500' >
                        loraem right
                    </div>
                </InView>
                <div style={{ opacity: 0 }}>
                    lorem left
                </div>
            </div>
            <div className='flex justify-center text-5xl mt-24 '>
                <div style={{ opacity: 0 }}>
                    loraem right
                </div>
                <InView onChange={setInViewEdu2} delay={200}>
                    <div id='tx1' className='fade-right transition-all duration-500 '  >
                        lorem left
                    </div>
                </InView>
            </div>
            <div className=' flex justify-center text-5xl mt-24 '>
                <InView onChange={setInViewEdu3} delay={200}>
                    <div id='tx1' className='fade-left transition-all duration-500' >
                        loraem right
                    </div>
                </InView>
                <div style={{ opacity: 0 }}>
                    lorem left
                </div>
            </div>
            <div className='flex justify-center text-5xl mt-24 '>
                <div style={{ opacity: 0 }}>
                    loraem right
                </div>
                <InView onChange={setInViewEdu4} delay={200}>
                    <div id='tx1' className='fade-right transition-all duration-500 '  >
                        lorem left
                    </div>
                </InView>
            </div>

        </div>
    )
}
export default My_Endu

