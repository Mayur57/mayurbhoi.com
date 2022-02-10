import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyledDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transition'
    }
})

// const StyledDiv = motion.div

const Section = ({ children, delay = 0 }) => (
    <StyledDiv
        initial = {{ y: 5 , opacity: 0 }}
        animate = {{ y: 0, opacity: 1 }}
        transition={{ duration: 0.25, delay }}
        exit = {{ y: 0}}
        mb={6} >
        { children }
    </StyledDiv>
)

export default Section