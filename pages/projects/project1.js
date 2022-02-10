import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Project Template">
      <Container>
        <Title>
          Project Template <Badge>2019-2022</Badge>
        </Title>
        <P>
          Use this as a template for project pages but do not expose this URL.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">
              https://dummy.website.com
              <ExternalLinkIcon ml="8px" mb="2px" fontSize={12} />
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
export { getServerSideProps } from '../../libs/cookies'