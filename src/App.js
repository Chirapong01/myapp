import { useRef } from 'react';
import './App.css';
import 'flowbite';
import AboutMe from './components/aboutme/aboutme';
import My_Skill from './components/my skill/my_skill';
import My_Endu from './components/my endu/my_endu';
import BlogPJ from './components/blog/blog';





function App() {
  const aboutme = useRef(null);
  const myedu = useRef(null);
  const myskill = useRef(null);
  const blogpj = useRef(null);

  function jumpTo(target) {
    if (target === 'aboutme') {
      aboutme.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (target === 'edu') {
      myedu.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (target === 'sk') {
      myskill.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (target === 'bg') {
      blogpj.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="App">
      <div>
        <div className='fixed top-0 right-0 mt-7 mr-8'>
          <button className="btn-icon text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2  " type="button" data-drawer-target="sidebar" data-drawer-show="sidebar" aria-controls="sidebar">
            <ul id='menu' >
              <li className='menu-1 w-9 h-1 bg-white transition-all'>
              </li>
              <li className='menu-2 w-9 h-1 bg-white mt-2'>
              </li>
              <li className='menu-3 w-9 h-1 bg-white transition-all mt-2'>
              </li>
            </ul>
          </button>
        </div>
        <div id="sidebar" className=" sidebar fixed top-0 right-0 w-64 z-40 h-screen p-4 overflow-y-auto transition-transform translate-x-full" tabIndex="-1" aria-labelledby="drawer-navigation-label">
          <button type="button" data-drawer-hide="sidebar" aria-controls="sidebar" className="mr-4 text-white bg-transparentrounded-lg text-sm p-1.5 absolute top-6  right-2.5 inline-flex items-center" >
            <div className="btn-icon text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2  " >
              <ul id=' menu'>
                <li className='menu-1-active w-9 h-1 bg-white transition-all'>
                </li>
                <li className='menu-2-active w-9 h-1 bg-white mt-2'>
                </li>
                <li className='menu-3-active w-9 h-1 bg-white transition-all mt-2'>
                </li>
              </ul>
            </div>

          </button>
          <div className=" pt-20 overflow-y-auto">
            <ul className="space-y-2 font-medium">
              <li>
                <div onClick={() => jumpTo('aboutme')} className="flex items-center font-bold p-2 text-white rounded-lg dark:text-white group cursor-pointer">
                  aboutme
                </div>
                <div onClick={() => jumpTo('edu')} className="flex items-center font-bold p-2 text-white rounded-lg dark:text-white group cursor-pointer">
                  edu
                </div>
                <div onClick={() => jumpTo('sk')} className="flex items-center font-bold p-2 text-white rounded-lg dark:text-white group cursor-pointer">
                  sk
                </div>
                <div onClick={() => jumpTo('bg')} className="flex items-center font-bold p-2 text-white rounded-lg dark:text-white group cursor-pointer">
                  blog
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div ref={aboutme}>
        <AboutMe />
      </div>
      <div className='pt-20' ref={myedu}>
        <My_Endu />
      </div>
      <div className='pt-20' ref={myskill}>
        <My_Skill />
      </div>
      <div className='pt-20' ref={blogpj}>
        <BlogPJ />
      </div>
    </div >
  );
}

export default App;
