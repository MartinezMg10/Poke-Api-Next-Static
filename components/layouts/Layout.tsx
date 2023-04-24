import Head from "next/head"
import { NavBar } from "../ui/NavBar";

interface Props{
    title?: string;
  children?: React.ReactNode

}


export const Layout : React.FC<Props> = ({children , title}) => {
  return (
    <>
        <Head>
            <title>{title || 'pokemon App'}</title>
            <meta name="author" content="Miguel Martinez" />
            <meta name="description" content={`Informacion sobre el pokémon ${title}`} />
            <meta name="keywords" content={`${title} ,pokemon,pokedex"`} />
        </Head>
        <NavBar />
        <main style={{ padding:'0px 20px'}}>
            {children}
        </main>
    </>
  )
}
