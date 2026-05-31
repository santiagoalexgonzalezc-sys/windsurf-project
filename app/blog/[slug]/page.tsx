export default function BlogPost({ params }: { params: { slug: string } }) {
  return <h1>Blog {params.slug}</h1>;
}
