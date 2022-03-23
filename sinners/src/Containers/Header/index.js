import { Grid, Row, Col} from '../../Components/Grid';
import Counter from "../../Containers/Counter";
import Score from "../../Containers/Score";

const Header = () => {
  return (
    <Grid width={'1000px'}>
      <Row>
        <Col size={1}><Counter /></Col>
        <Col size={1}><Score /></Col>
      </Row>
    </Grid>
  )
}

export default Header;
