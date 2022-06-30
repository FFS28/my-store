import Link from 'next/link'
import { useRouter } from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'
import { useCartContext } from '../../context/cart'
import Search from './Search'
import Links from './Links'

export default function NavBar() {
  const { items } = useCartContext()
  const router = useRouter();

  return (
    <Wrapper>
      <nav>
        <Box>

        <Logo>
          <Image 
            onClick={() => router.push('/')}
            src='/logo.png'
            quality={100}
            width={100}
            height={100}
            priority={true}
            objectFit='cover'
          />
        </Logo>

          <Search />
        </Box>
    
        <Box>
          <Links />
          <CartBox>
            <CartItems>{items ? items.length : ''}</CartItems>
            <Link href='/cart'>
              <ShopCart>
                <FaShoppingCart />
              </ShopCart>
            </Link>
          </CartBox>
          
        </Box>
      </nav>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  grid-column: 1/13;
  background: none;
  color: #eee;
  display: flex;
  flex-direction: column;
  padding: 2rem 2rem 0rem 2rem;
  margin-bottom: 3rem;

  height: fit-content;
  z-index: 2;
`

const ShopCart = styled.a`
  background: none;
  color: inherit;
  font-size: 1.6rem;

  @media screen and ( max-width: 600px ) {
      font-size: 1.3rem;
    }
`

const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  margin-top: 1rem;

  width: 100%;
  height: auto;
`

const CartBox = styled.div`
  grid-column: 7;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  padding: .6rem .6rem .3rem 0;

  width: fit-content;
  height: fit-content;
`

const CartItems = styled.span`
  background-color: #339;
  border-radius: 50%;
  color: #ddd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  padding: .3rem;
  position: absolute;
  top: 0;
  right: 0;

  width: 18px;
  height: 18px;

  @media screen and ( max-width: 600px ) {
      width: 10px;
      height: 10px;
    }
`
const Logo = styled.div`
  grid-column: 1;
  cursor: pointer;
  display: block;
  position: relative;
  margin-top: -20px;

  width: 80px;
  height: 80px;

  @media screen and ( max-width: 1200px ) {
    width: 60px;
    height: 60px;
    margin-top: 0;
  }
  @media screen and ( max-width: 600px ) {
    width: 40px;
    height: 40px;
    margin-top: 0;
  }
`