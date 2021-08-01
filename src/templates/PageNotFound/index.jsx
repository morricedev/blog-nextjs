import Link from 'next/link';
import * as Styled from './styles';

export const PageNotFound = () => {
  return (
    <Styled.Wrapper>
      <h1>Página não encontrada</h1>
      <Link href="/">
        <a>Voltar para a página principal</a>
      </Link>
    </Styled.Wrapper>
  );
};
