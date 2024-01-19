import Container from './container'
import cn from 'classnames'
import { EXAMPLE_PATH } from '../lib/constants'

export default function Alert({ preview }) {
  return (
    <div
      className='alert-container'
    >
      <Container>
        <div className="py-2 text-center text-sm">
          
            <>
              Trimite SMS cu textul NIMA la {' '}
              <a
                href="sms:8845?body=NIMA"
                className="underline hover:text-success duration-200 transition-colors"
              >
                8845
              </a>
            </>
        </div>
      </Container>
    </div>
  )
}
