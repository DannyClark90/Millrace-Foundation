import React from 'react'
import Header from '../Components/Header'
import { motion } from 'framer-motion'

export default function AboutUs() {
    const animationVariants = {
        initial: { y: 100, opacity: 0 },
        animate: { y: 0, opacity: 1 },
      };

  return (
    <>
    <Header PrimaryHeading={'Who We Are'}/>
    <main className='about'>
    <motion.img
        className="about__logo"
        src="src/assets/Millrace Outline mod.png"
        alt="Millrace spinning logo"
        initial={{opacity:0}}
        animate={{rotateZ:360, opacity:1}}
        transition={{duration:2}}
      />
    <motion.section 
    className='about__article'
    variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
    >
        <motion.p
        className='about__article--first-paragraph'
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >Welcome to The Millrace Foundation. We are a small charity (turnover under £100,000) whose aim is to help people who suffer mental or physical health problems with their recovery and rehabilitation. Our focus is twofold, concentrating in helping people with their life skills and also providing educational and work based activities based around furniture repair, upcycling and restoration in a therapeutic setting.</motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >Originally set up as a small project to help with the rehabilitation of people who were placed in “the care in the community” system in the 1990s we became a small community based business. In 1995 we became a City & Guilds approved training centre offering accredited courses to our beneficiaries and to members of the public. We have just been granted charitable status and we continue to offer free places to people with mental health and social isolation issues.
        </motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >Our commitment is in helping our local community and environment and we welcome your involvement in carrying out our charitable aims and objectives as stated in our constitution. Most of our work is carried out through our furniture project based at Moulsham Mill.</motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >We offer nationally recognised qualifications in subjects including cabinet making, French polishing and upholstery, to those recovering from mental health issues. Based within a furniture workshop in Chelmsford, Essex, The Millrace Project has been running for over 30 years, with funding and support from Chelmsford City Council, Comic Relief and many other Charitable Trusts.</motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >The Charity carries out its valuable work with people recovering from mental and physical health problems which are often bought on or are exacerbated by social isolation. The training and rehabilitation aspects of Millrace can offer around 12 places a week.</motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >Millrace provides a safe, supportive work environment for those who may not have been able to undertake traditional courses or education and we provide a supportive environment to socially excluded and disadvantaged people recovering from mental health problems, or with disabilities. The beneficiaries take part in training and gain experience working alongside experienced furniture restorers. All of them find that the experience has a positive effect on their problems. The project makes a real difference to the individuals involved and, more broadly, a contribution that benefits the community.</motion.p>
        <br/>
        <motion.p
        variants={animationVariants}
        initial="initial"
        transition={{ duration: 0.8 }}
        whileInView="animate"
        viewport={{ once: true }}
        >If you would like more information about our organisation and on how to make a positive difference please contact us today.</motion.p>
    </motion.section>
    </main>
    </>
  )
}
