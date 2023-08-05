import Container from '@/components/Container';
import styled from '@emotion/styled';
import Header from '@/components/Header';
import Button from '@/components/Button';

export default function Custom404() {
  return (
    <>
      <Header />
      <Container>
        <CenterBox>
          <MentBox>잘못된 접근입니다.</MentBox>
          <Button>메인으로</Button>
        </CenterBox>
      </Container>
    </>
  );
}

const MentBox = styled.div`
  font-weight: var(--font-bold);
  font-size: var(--font-large);
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const CenterBox = styled.div`
  margin-top: 10rem;
`;