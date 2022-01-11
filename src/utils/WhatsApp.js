import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'

export default function WApp() {

  return (
      <FloatingWhatsApp 
      phoneNumber="34663537159"
      accountName="Kowalski Design"
      statusMessage="Responderemos antes de 24h"
      chatMessage="¿En qué podemos ayudarte?"
      placeholder="Escriba su mensaje..."
      darkMode
      avatar="/pingu.png"
      />
  )
}