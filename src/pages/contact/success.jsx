import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import NextLink from 'next/link'

export default function ContactSuccess() {
  return (
    <Container className="mt-28">
      <svg viewBox="0 0 24 24" className="mx-auto my-6 h-16 w-16 text-teal-500">
        <path
          fill="currentColor"
          d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
        ></path>
      </svg>
      <div className="text-center">
        <h3 className="text-center text-base font-semibold text-gray-900 md:text-2xl">
          Erfolgreich gesendet!
        </h3>
        <p className="my-2 mx-auto max-w-lg text-center text-gray-600">
          Vielen Dank für Ihre Kontaktanfrage! Ich schätze Ihr Interesse an
          meinen Freelance-Dienstleistungen sehr. Ich werde Ihre Anfrage so
          schnell wie möglich bearbeiten und melde mich in Kürze bei Ihnen
          zurück.
        </p>
        <NextLink href="/">
          <Button className="mt-10">Zur Startseite</Button>
        </NextLink>
      </div>
    </Container>
  )
}
