import android from "@/assets/images/logos/android.svg"
import angular from "@/assets/images/logos/Angular.svg"
import bootstrap from "@/assets/images/logos/bootstrap.svg"
import laravel from "@/assets/images/logos/laravel.svg"
import mongodb from "@/assets/images/logos/mongodb.svg"
import nodejs from "@/assets/images/logos/nodejs-icon.svg"
import react from "@/assets/images/logos/react.svg"
import vue from "@/assets/images/logos/vue.svg"



type PersonalDataType = {
  name: string
  experience: string
  image: string
}

export const personalData: PersonalDataType[] = [
  {
    name: 'Android',
    experience: '2 Year',
    image: android
  },
  {
    name: 'Angular',
    experience: '1 Year',
    image: angular
  },
  {
    name: 'Bootstrap',
    experience: '3 Year',
    image: bootstrap
  },
  {
    name: 'Vue',
    experience: '2 Year',
    image: vue
  },
  {
    name: 'React',
    experience: '8 Months',
    image: react
  },
  {
    name: 'Mongodb',
    experience: '3 Months',
    image: mongodb
  },
  {
    name: 'Laravel',
    experience: '2 Year',
    image: laravel
  },
  {
    name: 'Node.js',
    experience: '10 Months',
    image: nodejs
  },
]
