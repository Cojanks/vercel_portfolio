import styled from 'styled-components';
import DumpsterFire from '../components/DumpsterFire';
import { useNavigate } from 'react-router-dom';
import { SyntheticEvent } from 'react';

type ErrorType = {
  type?: 'error' | 'generic' | 'wildcard-url' | 'under-construction';
  message?: string;
};

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  &.url,
  &.construction {
    padding: 30px;
    margin: 0 auto;
  }
`;

const BackButton = styled.button`
  padding: 10px;
  cursor: pointer;
  margin-top: 15px;
  background-color: transparent;
  color: var(--color-primary);
  border: 1px solid var(--color-primary);
  border-radius: var(--border-radius-sm);
`;

function Error({ type = 'generic', message }: ErrorType) {
  const navigate = useNavigate();
  return (
    <ErrorContainer
      className={`${type === 'wildcard-url' && 'url'} ${
        type === 'under-construction' && 'construction'
      }`}
    >
      <h2>Hmmm...</h2>
      <DumpsterFire />
      <p>
        Ok soooo... Steve here (our wonderful friend above) is usuaully an
        incredibly kind creature but is currently asking us (in his own way) to
        fix something.
      </p>
      {type === 'error' && message && <p>It seems, and I quote, {message}</p>}
      {type === 'wildcard-url' && (
        <>
          <p>
            He says: <br /> "These arent the URLs you're looking for."
          </p>
          <p>
            (We know, we also want to correct him on how 'URLs' should be
            singular but he is REALLY proud of his Star Wars reference. We do
            truly love seeing his joy in this, so please join us in commiting to
            the bit with us)
          </p>
          <BackButton
            onClick={(e: SyntheticEvent) => {
              navigate('/');
            }}
          >
            These aren't the URLs we're looking for. Move along.
          </BackButton>
        </>
      )}
      {type === 'under-construction' && (
        <>
          <p>
            Wait, perhaps not, he is on the phone with management, this page is
            under construction.
          </p>
          <p>
            Last we heard him say was something about "
            <span className="primary">supply chain</span>" issues.
          </p>
        </>
      )}
    </ErrorContainer>
  );
}

export default Error;
