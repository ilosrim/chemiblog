// import { ApolloClient, inMemoryCache, gql } from "@apollo/client"

// const URI = process.env.GRAPHQLURL

export default function Home({ blogs }) {
  return (
    <h1 className='header'>Hello</h1>
  )
}

export async function getStaticProps(){
  const url = process.env.STRAPIBASEURL

  const res = await fetch(`${url}/api/blogs`)
  const blogs = await res.json()

  return {
    props: {
      blogs,
    },
    revalidate: 10
  }
}