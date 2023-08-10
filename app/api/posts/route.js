import { connectDB } from '@/utils/connectDB'
import Post from '@/models/Post'
import { NextResponse } from 'next/server'

export async function POST(request) {
  const { title, description } = await request.json()
  await connectDB()
  await Post.create({ title, description })
  return NextResponse.json({ message: 'Post create success' }, { status: 201 })
}

export async function GET() {
  await connectDB()
  const posts = await Post.find()
  return NextResponse.json({ posts })
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get('id')
  await connectDB()
  await Post.findByIdAndDelete(id)
  return NextResponse.json({ message: 'Post deleted' }, { status: 200 })
}
