import { ChakraProvider } from '@chakra-ui/react'
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/nextjs';
import { Nav } from '../components/Layout/Nav'
import { useRouter } from 'next/router';

const publicPage = ["/", '/recipes/[id]'];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  //publicPageに含んでいるか確認
  const isPublicPage = publicPage.includes(pathname);
  return (
    <ClerkProvider>
      <ChakraProvider>
        {isPublicPage ? (
          <>
            <Nav />
            <Component {...pageProps} />
          </>
        ): (
          <>
            <SignedIn>
                <Nav />
                <Component {...pageProps} />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn/>
            </SignedOut>
          </>
        )}

      </ChakraProvider>
    </ClerkProvider>
  )
}

export default MyApp
