import Image from "next/image"

const BlogCart = ({ data }) => {
  console.log(data);
  return (
    <>
      <div className="container">
        {data.map(({attributes: {title, description, content, imgs}}, id) => (
          <div className="card" key={id}>
            <div className="title">{title}</div>
            <div className="desc">{description}</div>
            <div className="image">
              {
                console.log(imgs)
              }
              {/* <Image 
                src={imgs.data.attributes.url} 
                width={500} 
                height={500}
                alt={description}
              /> */}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogCart