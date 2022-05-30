export default async function handler(req, res) {
  // Run cors
  await cors(req, res)

  // Rest of the API logic
  res.json({ message: 'Hello Everyone!' })
}