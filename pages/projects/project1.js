import { Container, Badge, Link, List, ListItem , Heading } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const SectionTitle = ({ children }) => (
    <Heading variant="pronouns" mt={4} mb={2}>
      {children}
    </Heading>
  )

const Work = () => (
    <Layout title="Project Template">
      <Container mt={4}>
        <Title>
          Project Template <Badge>2019-2022</Badge>
        </Title>
        <SectionTitle>About</SectionTitle>
        <P>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </P>
        <SectionTitle>Stack</SectionTitle>
        <P>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </P>
        <SectionTitle>Stack</SectionTitle>
        <P>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content. Lorem ipsum may be
          used as a placeholder before the final copy is available.
        </P>
        <SectionTitle>Links</SectionTitle>
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

export default Work
