 import { Spacer, Text, useTheme } from '@nextui-org/react'
import Image from 'next/image'
import React from 'react'
import  NextLink  from 'next/link';
import { Link } from "@nextui-org/react";


 export const NavBar = () => {

    const {theme} = useTheme()

   return (
     <div style={{
        display:'flex',
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'start',
        padding:'0x 20px',
        backgroundColor: theme?.colors.gray100.value
     }}>
        <Image  
        src={"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"}
        alt='Pokemon ditto'
        width={'70px'}
        height={'70px'}
        />
      <NextLink href="/" passHref>
          <Link>
          <Text h1>P</Text>
          <Text h2>okémon</Text>
          </Link>
      </NextLink>

        <Spacer css={{flex:1}}/>
       <NextLink href={"/favorites"} passHref>
        <Link css={{marginRight:'20px'}}>
        <Text>Favoritos</Text>
        </Link>
       </NextLink>
     </div>
   )
 }
 