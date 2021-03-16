import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    realRoot: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    root: props => ({
        width: `${props.size * 4}px`,
        height: `${props.size * 5}px`,
        borderRadius: `80% 80% 80% 80%`,
        backgroundColor: `${props.color}`,
        position: 'relative'
    }),
    glint: props => ({
        width: `${props.size / 2}px`,
        height: `${props.size * 1.2}px`,
        backgroundColor: 'rgba(250, 250, 250, 0.4)',
        position: 'absolute',
        top: '13%',
        left: '20%',
        borderRadius: '80%',
        transform: 'rotate(30deg)'
    }),
    holder: props => ({
        borderBottom: `${props.size / 5}px solid ${props.color}`,
        borderLeft: `${props.size / 20}px solid transparent`,
        borderRight: `${props.size / 20}px solid transparent`,
        height: '0',
        width: `${props.size / 3}px`,
        marginTop: '0%'
    }),
}));

const Balloon = (props) => {
    const classes = useStyles(props);

    return (
        <div className={classes.realRoot}>
            <div className={classes.root}>
                {
                    props.flat ? (null) : (
                        <div className={classes.glint}></div>
                    )
                }
            </div>
            <div className={classes.holder}></div>
        </div>

    )
}

export default Balloon;