import angular from "@/assets/images/logos/Angular.svg"
import bootstrap from "@/assets/images/logos/bootstrap.svg"
import mongodb from "@/assets/images/logos/mongodb.svg"
import react from "@/assets/images/logos/react.svg"
import vue from "@/assets/images/logos/vue.svg"


export type ProjectType = {
  image: string
  variant: string
  title: string
  link: string
  category?: string[]
}

export const ProjectData: ProjectType[] = [
  {
    image: angular,
    variant: 'bg-soft-alt-danger',
    title: 'Farmer Project',
    link: 'htpps://abcd-Example.com',
    category: ['angular', 'bootstrap']
  },
  {
    image: bootstrap,
    variant: 'bg-soft-alt-info',
    title: 'ID Scan Project',
    link: 'htpps://abcd-Example.com',
    category: ['bootstrap']
  },
  {
    image: mongodb,
    variant: 'bg-soft-alt-success',
    title: 'Auto Drive Project',
    link: 'htpps://abcd-Example.com',
    category: ['angular', 'mongodb']
  },
  {
    image: vue,
    variant: 'bg-soft-alt-success',
    title: 'Health Application',
    link: 'htpps://abcd-Example.com',
  },
  {
    image: react,
    variant: 'bg-soft-alt-primary',
    title: 'eCommerce Project',
    link: 'htpps://abcd-Example.com',
    category: ['angular']
  },
]