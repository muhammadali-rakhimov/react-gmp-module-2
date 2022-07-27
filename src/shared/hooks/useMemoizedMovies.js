import { useMemo } from 'react'

const useMemoizedMovies = (movie, setMovie) => {
  return useMemo(() => ({ movie, setMovie }), [movie, setMovie])
}

export default useMemoizedMovies
