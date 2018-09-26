import fs from 'fs'
import path from 'path'
import { createClient } from 'contentful'

const SPACE = '4klekh5hb7b1'
const TOKEN = '260524d5e2d2ee9b773992258641351fefb5a7976bf3d78a3c189796e0e5b269'

const client = createClient({
  space: SPACE,
  accessToken: TOKEN
})

const types = [
  'pageHome'
]

export const getcontent = async () => {
  console.log('> Starting import...')
  for (const type of types) {
    console.log('> Getting content for', type)
    const entries = await client.getEntries({
      content_type: type,
      include: 3
    })
    if (entries.total === 1) {
      const { fields } = entries.items[0]
      fs.writeFileSync(
        path.join(__dirname, '..', 'data', `${type}.json`),
        JSON.stringify(fields)
      )
      console.log('> Content gotten and written for', type)
    }
  }
  return true
}

if (process.argv[2] === 'install') {
  getcontent()
}
