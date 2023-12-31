import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import HeadMeta from '@/components/HeadMeta';
import Header from '@/components/Header';
import Container from '@/components/Container';
import Button from '@/components/Button';
import { ROUTES } from '@/constants';

export default function Custom404() {
  const router = useRouter();

  return (
    <>
      <HeadMeta title="오류" />
      <Header />
      <Container>
        <CenterBox>
          <MentBox>잘못된 접근입니다.</MentBox>
          <Button onClick={() => router.push(ROUTES.MAIN)}>메인으로</Button>
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
