import { Container, Icon, TextBox } from "./Styled";


export default function RePostBox({ re_posted_by, isRePost}) {
    return (
      
        <Container isRePost={isRePost}>
            <TextBox>
            <Icon></Icon>
            <p>{`re posted by ${re_posted_by}`}</p>
            </TextBox>
        </Container>
    )
}