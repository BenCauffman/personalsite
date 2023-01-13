import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import SectionContext from "./SectionContext"

const MainBody: React.FC = () => {
  const [active, setActive] = useContext(SectionContext)
  return <Box>{active}</Box>
}

export default MainBody