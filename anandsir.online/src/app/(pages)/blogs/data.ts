import personalImg1 from "@/assets/images/personal/1.jpg"
import personalImg2 from "@/assets/images/personal/2.jpg"
import personalImg3 from "@/assets/images/personal/3.jpg"
import userImg2 from "@/assets/images/users/user-2.jpg"
import userImg1 from "@/assets/images/users/user-7.jpg"



export type BlogsType = {
  image: string
  title: string
  name: string
  date: string
  userImg: string
}


export const blogsData: BlogsType[] = [
  {
    image: personalImg1,
    title: 'Change the world with small things',
    name: 'Charles Woodall',
    date: '14 Feb 2022',
    userImg: userImg1,
  },
  {
    image: personalImg3,
    title: 'With a clean, minimal and professional look',
    name: 'Jarvis Owen',
    date: '12 Jan 2022',
    userImg: userImg2,
  },
  {
    image: personalImg2,
    title: 'With a clean, minimal and professional look',
    name: 'Jarvis Owen',
    date: '12 Jan 2022',
    userImg: userImg2,
  },
  {
    image: personalImg1,
    title: 'Change the world with small things',
    name: 'Charles Woodall',
    date: '14 Feb 2022',
    userImg: userImg1,
  },
  {
    image: personalImg3,
    title: 'With a clean, minimal and professional look',
    name: 'Jarvis Owen',
    date: '12 Jan 2022',
    userImg: userImg2,
  },
  {
    image: personalImg2,
    title: 'With a clean, minimal and professional look',
    name: 'Jarvis Owen',
    date: '12 Jan 2022',
    userImg: userImg2,
  },
]