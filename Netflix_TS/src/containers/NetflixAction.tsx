import { useEffect } from "react";
import Row from "../Row";
import { useAppDispatch, useAppSelector } from "../store/useStore";
import { Movie } from "../types/movie";
import { fetchActionAsync } from "../store/netflixActionSlice";

interface Props {
  onSelect: (movie: Movie) => void;
}

function NetflixAction({ onSelect }: Props) {
  const dispatch = useAppDispatch();
  const { error, loading, movies } = useAppSelector(
    (state) => state.netflixActionSlice
  );
  useEffect(() => {
    dispatch(fetchActionAsync());
  }, []);

  return (
    <Row
      title="NETFLIX ACTION"
      movies={movies}
      loading={loading}
      error={error}
      onSelect={(movie) => onSelect(movie)}
    />
  );
}

export default NetflixAction;