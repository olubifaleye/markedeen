import '@styles/globals.css';
import Nav from '@components/Nav';
// import Provider from '@components/Provider';

// Set metadata for layout file
export const metadata = {
    title: "Markedeen",
    description: "Aberdeen Marketing Agency"
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body className='bg-tertiary-blue'>
            <main className=''>
                <Nav />            
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout