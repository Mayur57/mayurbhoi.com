import { Box, Image, Grid, GridItem, Text } from '@chakra-ui/react'

const Experience = ({img, company, position, period}) => {
  return (
    <Box my={8}>
      <Grid templateColumns="repeat(5, 1fr)" gap={4} alignItems="center">
        <GridItem colSpan={1}>
          <Image
            src={img}
            height="4.5em"
            minW="4.5em"
            borderRadius="md"
          ></Image>
        </GridItem>
        <GridItem colSpan={4}>
          <Text fontWeight="bold" fontSize={22}>
            {company}
          </Text>
          <Text fontSize={14}>{position}</Text>
          <Text
            mt={1}
            fontSize={12}
            opacity={0.5}
            fontWeight={600}
            letterSpacing="1.2px"
            textTransform="uppercase"
          >
            {period}
          </Text>
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Experience
