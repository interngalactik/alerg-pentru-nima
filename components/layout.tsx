import Alert from './alert'
import Footer from './footer'
import Meta from './meta'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <div className='bg-image'>
          <div className='bg-layer'></div>
        </div>
        {/* <Alert preview={preview} /> */}
        <main className='main-container'>{children}</main>
      </div>
      <Footer />
    </>
  )
}
