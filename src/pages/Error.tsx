import styled from 'styled-components';
import DumpsterFire from '../components/DumpsterFire';
import { useNavigate } from 'react-router-dom';
import { getNumDaysSinceStart } from '../utility';
import { useSelector } from '../store/store';
import Bottom from '../components/Bottom';

type ErrorType = {
  type?:
    | 'error'
    | 'generic'
    | 'wildcard-url'
    | 'under-construction'
    | 'database';
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
  const errors = useSelector((state) => state.definitions.errors);

  return (
    <ErrorContainer
      className={`${type === 'wildcard-url' && 'url'} ${
        type === 'under-construction' && 'construction'
      }`}
    >
      <h2>Hmmm...</h2>
      <DumpsterFire />
      {type === 'error' && message && <p>It seems, and I quote, {message}</p>}
      {type === 'database' && (
        <p>
          It seems like there was an error retieving{' '}
          {Object.keys(errors).join(' & ')} from our servers.
        </p>
      )}
      {type === 'wildcard-url' && (
        <>
          <p>
            He says: <br /> "These arent the URLs you're looking for."
          </p>
        </>
      )}
      {type === 'under-construction' && (
        <>
          <p>
            We just checked with the contractors and this page is still under
            construction. <br /> They said something about "
            <span className="primary">supply chain</span>" issues.
          </p>
          <p className="whisper">{getNumDaysSinceStart()}</p>
        </>
      )}

      <BackButton
        onClick={() => {
          navigate('/');
        }}
      >
        {type === 'wildcard-url' &&
          "These aren't the URLs we're looking for. Move along."}
        {(type === 'error' ||
          type === 'database' ||
          type === 'under-construction') &&
          "Let's head back"}
        {type === 'generic' && 'Back'}
      </BackButton>

      <Bottom />
    </ErrorContainer>
  );
}

export default Error;
