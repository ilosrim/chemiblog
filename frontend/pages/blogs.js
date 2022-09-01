import BlogCart from "../components/BlogCart"

const Blogs = ({ blogs }) => {
  console.log(blogs);
  return (
    <>
      <h2>Blogs Page</h2>
      {/* <BlogCart data={blogs.data} /> */}
    </>
  )
}

// export async function getStaticProps(){
//   const url = process.env.STRAPIBASEURL

//   const res = await fetch(`${url}/api/blogs`)
//   const blogs = await res.json()

//   return {
//     props: {
//       blogs,
//     },
//     revalidate: 10
//   }
// }

export async function getStaticProps(context){
  const fetchParams = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      query: `
        blogs{
          data{
            attributes{
              title
              description
              content
              imgs{
                data{
                  attributes{
                    url
                  }
                }
              }
            }
          }
        }
      `
    })
  }

  const uri = process.env.GRAPHQLURL
  const res = await fetch(uri, fetchParams)
  const blogs = await res.json()

  return {
    props: {
      blogs,
    }
  }
}

export default Blogs