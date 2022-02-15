import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MoviePage } from 'types/movie';
import './styles.css'

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {

    return (
        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-box">
                <button className="dsmovie-pagination-button"
                    disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <ArrowBackIosNewIcon />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dsmovie-pagination-button"
                    disabled={page.last} onClick={() => onChange(page.number + 1)} >
                    <ArrowForwardIosIcon />
                </button>
            </div>
        </div>
    );
}

export default Pagination;