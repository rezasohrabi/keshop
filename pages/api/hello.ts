// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
<<<<<<< HEAD

import { NextApiRequest, NextApiResponse } from 'next'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json({ name: 'John Doe' })
}

export default handler
=======
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
>>>>>>> 61803c11143e15bde1fc9b62961aba5ef7f28990
