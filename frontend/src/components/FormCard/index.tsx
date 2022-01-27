import axios, { AxiosRequestConfig } from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import './styles.css'
import Stack from '@mui/material/Stack';

type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const navigate = useNavigate();

    const [movie, setMovie] = useState<Movie>();

    const [rating, setValue] = useState<number | null>(1);

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                setMovie(response.data);
            });
    }, [movieId]);



    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = rating;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(response => {
            navigate("/");
        })
    }

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="dsmovie-form" onSubmit={handleSubmit}>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <Stack spacing={-2.5}>
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="score">Informe sua avaliação</label>
                        </div>
                        <Box
                            sx={{
                                '& > legend': { mt: 2 },
                            }}
                        >

                            <Rating
                                name="size-small"
                                size="medium"
                                value={rating}
                                onChange={(event, newValue) => {
                                    setValue(newValue);
                                }}
                            />
                        </Box>
                    </Stack>

                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn" >Salvar</button>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <Link to="/">
                            <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                        </Link>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default FormCard;