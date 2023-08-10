import styles from '@/styles/posts.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import DeleteBtn from './DeleteBtn'

const getPosts = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/posts', {
      cache: 'no-store',
    })
    return res.json()
  } catch (error) {
    console.log(error)
  }
}
const Posts = async () => {
  const { posts } = await getPosts()

  return (
    <div className={styles.container}>
      {posts.length === 0 ? (
        <div>Loading</div>
      ) : (
        posts.map((post) => (
          <div key={post._id} className={styles.card}>
            <div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
            </div>
            <div className={styles.action}>
              <button>
                <Link href={`/edit-post/${post._id}`}></Link>
              </button>
              <DeleteBtn id={post._id} />
            </div>
          </div>
        ))
      )}
    </div>
  )
}
export default Posts
