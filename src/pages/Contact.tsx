//work here 23 06 2025 15:39
//work here 25 06 2025 11:40
//work here 07 07 2025 12:22
import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

//Styles
import '@/styles/ConfigButtons.css'

//sent e-mails
import emailjs from 'emailjs-com'

// MUI
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

// COMPONENTS
import { MenuPage, ImgMenuTechAndOptica } from '@/components'

// HOOKS

// UTILS
import { pxToRem } from '@/utils'

// REDUX

// TYPES

function ContactPage() {
  const [loading, setLoading] = useState(false) // controla o estado do envio
  const form = useRef<HTMLFormElement | null>(null)

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setLoading(true)

      await emailjs
        .sendForm(
          'service_7qws68i',
          'template_ktbat97',
          form.current!,
          '7eukjotSX7zyasEDz'
        )
        .then(() => {
          alert('E-mail enviado com sucesso!')
        })
        .catch((err) => {
          console.error('Erro:', err)
        })
    } catch (error) {
      console.error('Erro ao enviar e-mail', error)
    } finally {
      setLoading(false)
    }
  }

  const navigate = useNavigate()

  const openInitial = (): void => {
    navigate('/Initial')
  }

  return (
    <>
      <MenuPage />
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            sx={{
              justifyContent: 'center',
              paddingTop: '10px',
              display: 'flex',
              height: '100vh',
            }}
          >
            <Container maxWidth="sm">
              <Box
                sx={{
                  marginBottom: pxToRem(24),
                  alignItems: 'center',
                  justifyContent: 'center',
                  display: 'flex',
                }}
              >
                <ImgMenuTechAndOptica />
              </Box>
              <form className="config-form" ref={form} onSubmit={sendEmail}>
                <input
                  className="config-text"
                  type="text"
                  name="name"
                  placeholder="Seu nome"
                  required
                />
                <input
                  className="config-text"
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  required
                />
                <textarea
                  className="config-text-mult-line "
                  name="message"
                  placeholder="Mensagem"
                  required
                />
                <button
                  className="config-button"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Enviando...' : 'Enviar'}
                </button>
                <button
                  className="config-button"
                  type="submit"
                  disabled={loading}
                  onClick={openInitial}
                >
                  {loading ? 'Aguarde...' : 'Voltar'}
                </button>
              </form>
            </Container>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default ContactPage
