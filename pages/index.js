import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography
} from '@material-ui/core';
import Balloon from '../components/balloon';
import clsx from 'clsx';
import { motion, useCycle } from 'framer-motion';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    position: 'relative'
  },
  animateHero: {
    width: '100%'
  },
  hero: {
    width: '100%',
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    padding: theme.spacing(4, 6),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(4, 0)
    },
    backgroundColor: theme.palette.primary.main,
    overflow: 'hidden'
  },
  cakeHolder: {
    width: '100%',
  },
  cake: {
    maxWidth: '100%',
  },
  happy: {
    fontFamily: theme.typography.bold.fontFamily,
    color: 'rgba(0, 0, 0, 0.5)'
  },
  words: {
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(2)
    },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '90vh',
    position: 'relative',
  },
  weirdBorder: {
    width: '15%',
    borderBottom: '4px solid',
    borderBottomColor: theme.palette.creamy.main,
    marginTop: theme.spacing(2)
  },
  spaceTop3: {
    marginTop: theme.spacing(3)
  },
  spaceBottom3: {
    marginBottom: theme.spacing(3)
  },
  creamy: {
    color: theme.palette.creamy.main
  },
  secondaryText: {
    color: 'rgba(0, 0, 0, 0.5)',
    fontFamily: theme.typography.semiBold.fontFamily
  },
  dateBox: {
    position: 'absolute',
    top: '5%'
  },
  dateText: {
    fontFamily: theme.typography.bold.fontFamily
  },
  address: {
    position: 'absolute',
    bottom: '5%',
    fontFamily: theme.typography.bold.fontFamily
  },
  floater: {
    position: 'absolute',
  },
  starsHolder: {
    width: '20%',
    top: '20%',
    left: '70%',
    [theme.breakpoints.down('sm')]: {
      left: '60%'
    }
  },
  starsHolder2: {
    width: '20%',
    top: '10%',
    left: '90%'
  },
  pizzaHolder: {
    width: '10%',
    top: '70%',
    left: '50%',
    [theme.breakpoints.down('sm')]: {
      width: '20%',
      top: '50%'
    }
  },
  partyHolder: {
    top: '60%',
    left: '0%',
    marginTop: theme.spacing(-2),
    [theme.breakpoints.down('sm')]: {
      width: '30%',
    }
  },
  stars: {
    maxWidth: '100%',
  },
  balloon1: {
    right: '2%',
    top: '50%',
    [theme.breakpoints.down('sm')]: {
      top: '75%'
    }
  },
  balloon2: {
    right: '2%',
    top: '5%'
  },
  balloon3: {
    left: '20%',
    top: '79%',

  },
  balloon4: {
    right: '7%',
    top: '5%'
  },
  balloon5: {
    right: '34%',
    top: '30%'
  },
}));

const balloonVariants = (delay, neg) => {
  return {
    initial: {
      y: 20, transition: {

      }
    },
    animate: {
      y: 0,
      opacity: 1,
      rotate: neg ? (10) : (-10),
      transition: {
        yoyo: Infinity,
        duration: 1.7,
        delay,
        ease: "easeIn"
      }
    }
  }
}

const textVariant = (delay, appear) => {
  return {
    initial: { opacity: 0, y: appear ? (0) : (20) },
    animate: {
      opacity: 1, y: 0, transition: {
        duration: 0.8,
        delay
      }
    }
  }

}


const Index = (props) => {
  const classes = useStyles();

  const smallScreen = useMediaQuery((theme) => (theme.breakpoints.down('sm')));
  console.log(smallScreen)

  return (
    <div className={classes.root}>

      <Grid className={classes.hero} container alignItems="center"
        justify="center">
        <motion.div
          variants={balloonVariants(1, true)}
          initial="initial"
          animate="animate"
          className={
            clsx(classes.floater,
              classes.balloon2)}>
          <Balloon
            size={20}
            color='#CF7570'
          />
        </motion.div>

        <motion.div
          variants={balloonVariants(1.4, false)}
          initial="initial"
          animate="animate"
          className={
            clsx(classes.floater,
              classes.balloon4)}
        >
          <Balloon
            size={20}
            color='rgba(251, 180, 130, 0.9)'
          />
        </motion.div>

        <motion.div
          variants={balloonVariants(1.2, true)}
          initial="initial"
          animate="animate"
          className={
            clsx(classes.floater,
              classes.balloon5)}>
          <Balloon
            size={20}
            color='#CF7570' />
        </motion.div>
        <motion.div
          variants={textVariant(0.8, true)}
          initial="initial"
          animate="animate"
          className={clsx(classes.floater, classes.starsHolder, classes.partyHolder)}>
          <img src="/partei.png" alt="party" className={classes.stars} />
        </motion.div>
        <motion.div
          variants={textVariant(0.6, true)}
          initial="initial"
          animate="animate"
          className={clsx(classes.floater, classes.starsHolder, classes.pizzaHolder)}>
          <img src="/pizzaa.png" alt="pizza" className={classes.stars} />
        </motion.div>
        <Grid item xs={12} sm={7} className={classes.words}>
          <motion.div
            variants={textVariant(1, true)}
            initial="initial"
            animate="animate"
            className={classes.dateBox}>
            <Typography variant={smallScreen ? ("h6") : ("h5")} className={clsx(
              classes.dateText,
              classes.creamy
            )}>
              MAR
            </Typography>
            <Typography variant={smallScreen ? ("h3") : ("h2")} className={
              clsx(
                classes.dateText,
                classes.creamy
              )
            }>
              17
            </Typography>
          </motion.div>
          <motion.div
            variants={balloonVariants(1.4, false)}
            initial="initial"
            animate="animate"
            className={
              clsx(classes.floater,
                classes.balloon1)}>
            <Balloon
              size={20}
              color='#FBB482' />
          </motion.div>


          <motion.div
            variants={textVariant(0.2, true)}
            initial="initial"
            animate="animate"
            className={clsx(classes.floater, classes.starsHolder)}>
            <img src="/stars.png" alt="stars" className={classes.stars} />
          </motion.div>
          <motion.div
            variants={textVariant(0.4, true)}
            initial="initial"
            animate="animate"
            className={clsx(classes.floater, classes.starsHolder2)}>
            <img src="/stars.png" alt="stars" className={classes.stars} />
          </motion.div>
          <motion.div
            variants={textVariant(4.5, true)}
            initial="initial"
            animate="animate"
            className={classes.address}>
            <Typography variant="h5"
              className={clsx(
                classes.creamy,
                classes.dateText
              )}>
              To Yetunde
              </Typography>
          </motion.div>
          <motion.div
            variants={textVariant(2)}
            initial="initial"
            animate="animate">
            <Typography color="secondary" className={classes.happy} variant={smallScreen ? ("h2") : ("h1")}>
              Happy Birthday
            </Typography>
          </motion.div>

          <motion.div
            variants={textVariant(2.5, true)}
            initial="initial"
            animate="animate"
            className={classes.weirdBorder}></motion.div>
          <Typography color="secondary" className={clsx(
            classes.spaceTop3,
            classes.secondaryText
          )} variant="body2">
            <motion.span
              variants={textVariant(3.5)}
              initial="initial"
              animate="animate">
              Lorem ipsum and some other shit i'm suppose to type in here, take
              all this nonsense, you can have it right here, get your nonsense here
            </motion.span>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5}>
          <motion.div
            variants={textVariant(4.5, true)}
            initial="initial"
            animate="animate"
            className={classes.cakeHolder}>
            <img className={classes.cake} src="/big-cake.png" alt="pink cake" />
          </motion.div>
        </Grid>
      </Grid>

    </div>
  )
}

export default Index;