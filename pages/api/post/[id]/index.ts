export default async function handler(req, res) {
    const { id } = req.query;
    // res.end(`Post: ${id} (only)`);
    const a = await fetch(`https://fakestoreapi.com/products/${id}`)
    const post = await a.json();
    res.status(200).json(post)
}
