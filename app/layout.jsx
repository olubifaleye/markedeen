import '@styles/globals.css';
import Nav from '@components/Nav';
import Footer from '@components/Footer';
// import Provider from '@components/Provider';

// Set metadata for layout file
export const metadata = {
    title: "Markedeen",
    description: "Aberdeen Marketing Agency"
}

//Added in Nav component to layout higher order component
const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className='bg-tertiary-blue'>
            <main className=''>
                <Nav />            
                {children}
                <Footer />

            </main>
        </body>
    </html>
  )
}

export default RootLayout