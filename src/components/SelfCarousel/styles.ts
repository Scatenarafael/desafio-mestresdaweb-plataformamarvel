import styled from "styled-components";

export const CarouselContainer = styled.div`
  @media (max-width: 1200px) {
    .slider {
      margin: 5rem 1rem 1rem 4rem;
      width: 700px;
    }
  }
  @media (max-width: 700px) {
    .slider {
      display:flex;
      justify-content: center;
      align-items: center;
      width: 300px;
    }
    
  }
`;
