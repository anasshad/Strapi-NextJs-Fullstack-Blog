export default function Post({ post }) {
  return (
    <>
      {post && (
        <>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </>
      )}
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await fetch(`http://localhost:1337/posts?slug=${slug}`);
  const posts = await res.json();
  const post = posts[0];

  return {
    props: {
      post,
    },
  };
}
