import { Layout } from '@/components/layouts';
import NoFavorites from '@/components/ui/NoFavorites';
import FavoritePokemons from '@/components/pokemons/FavoritePokemons';
import { localFavorites } from '@/utils';
import { useState, useEffect } from 'react';

const FavoritesPage = () => {

  const [favoritePokemons, setFavoritesPokemons] = useState<number[]>([])

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons())
  }, [])


  return (
    <Layout title='Pokemon - Favorites'>
      {favoritePokemons.length === 0
        ? (<NoFavorites />)
        : (<FavoritePokemons pokemons={favoritePokemons} />)}
    </Layout>
  )
}

export default FavoritesPage
