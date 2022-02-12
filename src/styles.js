import { makeStyles } from "@material-ui/core/styles";

// pass in a callback fun , which immediately return the object

// if u writing css in js write the value in string and use camelCase instead of flex-direction
const useStyles = makeStyles((theme) =>({
    container:{
        backgroundColor : theme.palette.background.paper,
        padding : theme.spacing(4,0,6)
    },
    icon:{
        marginRight:'20px',
    },
    buttons:{
        marginTop : '40px',
    },
    cardGrid:{
        padding:'20px 0'
    },
    card:{
        height: '100%',
        display:'flex',
        flexDirection:'column'
        
    },
    cardMedia:{
        paddingTop :'56.25%',
    },
    cardContent:{
        flexGrow:1,
    },
    footer:{
        backgroundColor:theme.palette.background.paper,
        padding: '50px 0'
    }
}));

export default useStyles;