import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CardHeader from "@material-ui/core/CardHeader";
import Typography from "@material-ui/core/Typography";


const useStyles = makeStyles({
    card: { maxWidth: 173 },
    media: { height: 250 },
});

export default function CastMemberCard({ actor }) {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardHeader
                className={classes.header}
                title={
                    <Typography variant="h5" component="p">
                        {actor.name}{" "}
                    </Typography>
                }
            />
            <CardMedia
                className={classes.media}
                image={
                    actor.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                        : `${process.env.PUBLIC_URL}/assets/actor.jpg`
                }
            />
            <CardContent>
                <Typography variant="h6" component="p">
                    as {actor.character}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
            </CardActions>
        </Card>
    );
}