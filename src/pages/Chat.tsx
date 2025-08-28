import React, { useState } from 'react'
import { askChatGPT } from '../Back_End/src/services/openai'

const Chat: React.FC = () => {
  const [input, setInput] = useState('')
  const [response, setResponse] = useState('')

  const handleSend = async () => {
    if (!input.trim()) return
    const reply = await askChatGPT(input)
    setResponse(reply)
  }

  return (
    <div style={{ padding: '20px' }}>
      <h2>Chat com GPT</h2>
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={4}
        style={{ width: '100%', marginBottom: '10px' }}
      />
      <br />
      <button onClick={handleSend}>Enviar</button>
      <div style={{ marginTop: '20px', whiteSpace: 'pre-wrap' }}>
        <strong>Resposta:</strong> {response}
      </div>
    </div>
  )
}

export default Chat
