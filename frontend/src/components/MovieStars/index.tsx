import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import './styles.css'

type Props = {
    score: number;
}

type StarProps = {
    fill: number;
}

//ex: getFills(3.5) => [1, 1, 1, 0.5, 0]
function getFills(score: number) {

    const fills = [0, 0, 0, 0, 0];

    const integerPart = Math.floor(score);

    for (let i = 0; i < integerPart; i++) {
        fills[i] = 1;
    }

    const diff = score - integerPart;
    if (diff > 0) {
        fills[integerPart] = 0.5;
    }

    return fills;
}

function Star({ fill }: StarProps) {
    if (fill === 0) {
        return <StarBorderIcon />
    }

    else if (fill === 0.5) {
        return <StarHalfIcon />
    }

    else {
        return <StarIcon />
    }
}

function MovieStars({ score }: Props) {

    const fills = getFills(score);

    return (
        <div className="dsmovie-stars-container">
            <Star fill={fills[0]} />
            <Star fill={fills[1]} />
            <Star fill={fills[2]} />
            <Star fill={fills[3]} />
            <Star fill={fills[4]} />
        </div>
    );
}

export default MovieStars;