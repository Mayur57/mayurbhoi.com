import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Project1">
      <Container>
        <Title>
          Project 1 <Badge>2019-2022</Badge>
        </Title>
        <P>
          This is a project lol.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="/">
              https://dummy.website.com<ExternalLinkIcon ml="8px" mb="2px" fontSize={12}/>
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  )
}

export default Work
