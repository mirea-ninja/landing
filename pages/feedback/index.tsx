import FeedbackForm from '@/components/feedback/FeedbackForm'
import Layout from '@/components/Layout'
import { CMSProjectGroupsUrl } from '@/constants/constants'

export async function getStaticProps() {
  const response = await fetch(CMSProjectGroupsUrl).then((res) => res.json())
  const projectTitles = response.data
    .sort((group1: any, group2: any) => group1.attributes.order - group2.attributes.order)
    .flatMap((group: any) => group.attributes.projectCards.map((card: any) => card.title))

  return {
    props: { projectTitles },
  }
}

interface FeedbackPageProps {
  projectTitles: string[]
}

export default function FeedbackPage(props: FeedbackPageProps) {
  return (
    <Layout>
      <FeedbackForm projects={props.projectTitles} />
    </Layout>
  )
}
