export default async (req, res) => {
  // Open Chrome DevTools to step through the debugger!
  // debugger;
  // res.end(`Post: ${id} (only)`);
  const a = await fetch('https://fakestoreapi.com/products')
  const post = await a.json();
  res.status(200).json(post)
  // res.status(200).json({ posts: [] });
};
