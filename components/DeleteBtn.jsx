'use client'
import { useRouter } from 'next/navigation'

const DeleteBtn = ({ id }) => {
  const router = useRouter()

  const removePost = async () => {
    const res = await fetch(`http://localhost:3000/api/posts?id=${id}`, {
      method: 'DELETE',
    })

    if (res.ok) {
      router.refresh()
    }
  }
  return <button onClick={removePost}>DeleteBtn</button>
}
export default DeleteBtn
