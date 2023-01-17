import { Box } from "@chakra-ui/react"
import { useContext } from "react"
import BodyCard from "./BodyCard"
import SectionContext from "./SectionContext"

interface IProps {
  details: string[]
}
const MainBody: React.FC<IProps> = ({details}) => {
  const [active, setActive] = useContext(SectionContext);

  return <BodyCard />
}

export default MainBody