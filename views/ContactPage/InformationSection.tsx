import styled from 'styled-components';

export default function InformationSection() {
  return (
    <Wrapper>
      <h3>Contact Info</h3>
      <p>
        <span>Address:</span> Unit 1025, Building 19W, No. 19 Science Park West Avenue, Hong Kong Science Park, Pak Shek Kok, N.T., Hong Kong
      </p>
      <p>
        <span>Email:</span> admin@impactai.hk
      </p>
      <p>
        <span>Phone:</span> +852 9879 6414
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  flex: 1;
  margin-right: 3rem;
  margin-bottom: 3rem;

  h3 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
  }

  p {
    font-weight: normal;
    font-size: 1.6rem;
    color: rgba(var(--text), 0.7);
  }

  span {
    opacity: 1;
    color: rgba(var(--text), 1);
  }
`;
