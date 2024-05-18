"use client"
import Link from "next/link"

const PostCard = ({ post }) => {
    return (
        <div >
            <Link href={`/posts/${post.id}`}>
                <h3>{post.id} . {post.title}</h3>
            </Link>
            <p>{post.body}</p>
            <button onClick={() => {
                alert("click funcionando")
            }}>
                click
            </button>``
        </div>
    )
}

export default PostCard 