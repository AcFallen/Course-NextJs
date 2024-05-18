import PostCard from "@/components/PostCard"


async function loadPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    await new Promise((resolve)=> setTimeout(resolve , 5000))
    return data
}

export default async function Posts() {

    const posts = await loadPosts()

    return (
        <div>
            {posts.map(post => (
                <PostCard post={post} key={post.id}/>
            ))}
        </div>
    )
}