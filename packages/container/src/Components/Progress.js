import * as React from 'react';
import { makeStyles, createStyles, the } from '@material-ui/core';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles((theme)=>{
    return createStyles({
        bar: {
            width: '100%',
            '& > * + *': {
                marginTop: theme.spacing(2)
            }
        }
    })
})

export default () => {
    const classes= useStyles();

    return (
        <div className={classes.bar}>
            <LinearProgress />
        </div>
    )
}