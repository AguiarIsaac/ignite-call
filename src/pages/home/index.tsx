import { Heading, Text } from '@ignite-ui/react'
import Image from 'next/image'
import { Container, Hero, Preview } from './styles'
import imagePreview from '../../assets/app-preview.png'
import { ClaimUsernameForm } from './components/ClaimUsernameForm'
import { NextSeo } from 'next-seo/lib/meta/nextSEO'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Descomplique sua agenda | Ignite Call"
        description="Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre."
      />
      <Container>
        <Hero>
          <Heading size='4xl'>Agendamento descomplicado</Heading>
          <Text size='lg'>Conecte seu calendário e permita que as pessoas marquem agendamentos no seu tempo livre.</Text>
          <ClaimUsernameForm />
        </Hero>

        <Preview>
          <Image 
            src={imagePreview}
            height={400}
            quality={100}
            priority
            alt='Clendário simbolizando aplicação em funcionamento'
          />
        </Preview>
      </Container>
    </>
  )
}
