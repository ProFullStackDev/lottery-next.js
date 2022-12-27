import { CommonLayout } from "../components/common-layout"
import { AboutUs_ } from '../components/aboutUs/about.us'

export default function AboutUs() 
{
  return (
    <CommonLayout fixedHeader={false}>
      <AboutUs_ />
    </CommonLayout>
  )
}