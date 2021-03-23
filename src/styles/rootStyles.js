import { makeStyles } from '@material-ui/core/styles';

export const rootStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: 40,
    },
    paper: {
        padding: theme.spacing(2),
        marginTop: theme.spacing(2),
        color: theme.palette.text.secondary,
    },
}));
