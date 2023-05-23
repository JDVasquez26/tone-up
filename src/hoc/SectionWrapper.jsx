import { motion } from 'framer-motion'

// import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

//  this is a higher component because it has a function inside of it
// ...iow it returns another function (HOC func),..
// within the motion.section will actually render the og component
const SectionWrapper = 
(Component, idName) => 
function HOC () {
    return (
        <motion.section
        variants={staggerContainer()}  //<-- animating section
        initial='hidden'
        whileInView='show' //<-- 
        viewport={{ once: true, amount: 0.25 }}
        // className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        <span 
        className='hash-span' 
        id={idName} //<-- id name that we pass in the og component, ex "about"
        >  
          &nbsp;
        </span>

        <Component />
      </motion.section>
    )
}

export default SectionWrapper;