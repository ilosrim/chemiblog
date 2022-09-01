import Link from "next/link"

export default function Home() {
  const nav = [
    {label: "Home", path: "/"},
    {label: "Blogs", path: "/blogs"},
    {label: "About", path: "/about"},
  ]
  return (
    <>
      <h2>Home Page</h2>
      <ul>
        {nav.map(navEl => (
          <li key={navEl.label}>
            <Link href={navEl.path}>{navEl.label}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}