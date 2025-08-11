import {motion} from 'framer-motion' ;
import {styles} from '../styles' ;
import {ComputersCanvas} from './canvas' ;
import HackerRoom  from './canvas/HackerRoom';
import { PerspectiveCamera } from '@react-three/drei';
import { Suspense } from 'react';
import Loader from './Loader';
import { Canvas } from '@react-three/fiber';
import { useMediaQuery } from 'react-responsive';
import { Leva } from 'leva';
import HeroCamera from './HeroCamera';
import Target from './Target';
import ReactLogo from './ReactLogo';
import Cube from './Cube';

const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -6.55, 0],
    cubePosition: isSmall ? [3.1, -6, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 2, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

const Hero = () => {

    // Use media queries to determine screen size
  const isSmall = useMediaQuery({ maxWidth: 440 });
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

  const sizes = calculateSizes(isSmall, isMobile, isTablet);

  return (
    <section className='relative w-full h-screen mx-auto'>

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#dcbd6b]'/>
          <div className='w-1 sm:h-80 h-40 gold-gradient'/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm&nbsp;
            <span className='text-[#dcbd6b]'>Ayushman</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I craft sleek web apps, modern UIs, and explore DevOps. {/* <br className='sm:block hidden'/> */}
          </p>
        </div>
      </div>

      {/* <ComputersCanvas /> */}

      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <Suspense fallback={<Loader />}>
            {/* To hide controller */}
            <Leva hidden />
            <PerspectiveCamera makeDefault position={[0, 0, 30]} />

            <HeroCamera isMobile={isMobile}>
              <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
            </HeroCamera>

            <group>
              <Target position={sizes.targetPosition} />
              <ReactLogo position={sizes.reactLogoPosition} />
              <Cube position={sizes.cubePosition} />
            </group>

            <ambientLight intensity={1} />
            <directionalLight position={[10, 10, 10]} intensity={0.5} />
          </Suspense>
        </Canvas>
      </div>

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-primary flex justify-center items-start p-2'>
            <motion.div 
              animate = {{
                y: [0,24,0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-primary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero