import Paragraph from '../paragraph'
import Section from '../section'
import LinkButton from '../linkButton'

const AboutParaSection = () => {
  return (
    <Section delay={0.2}>
      <Paragraph>
        I am a self-taught full-stack developer with a rich background in
        developing mobile apps. I have a knack for writing intricately designed,
        responsive software to solve problems. I like writing scripts to
        automate my tasks and routine.
      </Paragraph>
      <LinkButton link="/about">about</LinkButton>
    </Section>
  )
}

export default AboutParaSection
