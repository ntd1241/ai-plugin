//We handle prompt inside this file, so exported functions take no paramater

import client, { getCurrentComment, getTicket } from '@/app/api/zendesk.api'

export interface ResponseReturnProps {
  success: boolean
  errorMsg?: string
  response?: Response
}

export async function DraftResponse(): Promise<Response> {
  try {
    const ticket = (await client.get("ticket")).ticket;
    console.log(ticket)

    const response = await fetch('http://localhost:5555/api/v1/zendesk/suggest-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ticket })
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export async function CorrectSpelling(): Promise<Response> {
  try {
    const currentComment = await getCurrentComment()
    console.log(currentComment)
    const response = await fetch('http://localhost:5555/api/v1/zendesk/enhance-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'Correct' })
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export async function ShortenResponse(): Promise<Response> {
  try {
    const currentComment = await getCurrentComment()
    console.log(currentComment)
    const response = await fetch('http://localhost:5555/api/v1/zendesk/enhance-response', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'Shorten', response: currentComment })
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response
  } catch (error) {
    throw new Error((error as Error).message)
  }
}

export async function LengthenResponse(): Promise<Response> {
  try {
    const currentComment = await getCurrentComment()
    const response = await fetch('http://localhost:3500/enhance-response-wrongggg', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'Lengthen', response: currentComment })
    })
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }

    return response
  } catch (error) {
    throw new Error((error as Error).message)
  }
}
