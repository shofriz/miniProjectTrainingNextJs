///// ====CREATING API====

// APP-ID = 64193cae2a8db12030599fa0

const APP_ID = '64193cae2a8db12030599fa0' 

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const response = await fetch('https://dummyapi.io/data/v1/user', {
      headers: {
        'app-id': APP_ID
      }
    })
    const data = await response.json()

    res.status(200).json({ data })
  } else if (req.method === 'POST') {
    const { firstName, lastName, email } = req.body
    if (!firstName || !lastName || !email) {
      res.status(400).json({ error: 'firstName, lastName, and email are required' })
      return
    }

    const response = await fetch('https://dummyapi.io/data/v1/user/create', {
      method: 'POST',
      headers: {
        'app-id': APP_ID,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,
        lastName,
        email
      })
    })

    const data = await response.json()

    res.status(201).json({ data })
  } else if (req.method === 'DELETE') {

    //CARA DELETE use param ('API+?id=[id]')
    const { id } = req.query
    if (!id) {
      res.status(400).json({ error: 'id is required' })
      return
    }

    const response = await fetch(`https://dummyapi.io/data/v1/user/${id}`, {
      method: 'DELETE',
      headers: {
        'app-id': APP_ID
      }
    })

    const data = await response.json()

    res.status(200).json({ data })
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}
