import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div>
      <h2>Posts</h2>
      {posts &&
        posts.map((post) => (
          <div key={post.id}>
            <h3>
              <Link href={`/${post.slug}`}>{post.title}</Link>
            </h3>
            <p>{post.content}</p>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
