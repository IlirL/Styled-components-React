import React from 'react'
import styled from 'styled-components'
import Button from './Button'

// const Title = styled.h1`
//   color:red;
//   font size:25rem;

// `;

// const Section = styled.section`

//   padding:2rem;
//   margin:2rem;
// `;

  // const MainWrapper =  styled.section`
  
  //   width:100%;
  //   max-width:1200px;
  //   margin:0 auto;
  //   display:flex;
  //   flex-direction:column;
  // `;


// const StyledButton  = styled.button`
// padding:1rem 1.5rem;
// font-size:1.8rem;
// color:#333;
// outline:none;
// `;

const PaginationWrapper = styled.div`
  display:flex;
  width:100%;
  justify-content:${({page}) =>{
    if(page === 'first') return 'flex-end';
    else if(page === 'middle') return 'space-between';
    else return 'flex-start';
  }};
`;

function App() {
  return (
    <div>
        {/* <Title>My styled title</Title> */}
        
        {/* <Section>
          <Title>My title</Title>
        </Section> */}

        {/* <MainWrapper>This is the main wrapper</MainWrapper> */}

        {/* <StyledButton>My button</StyledButton> */}

        {/* <Button primary bgColor = "violet">My button</Button>
        <Button>My button</Button> */}

        <PaginationWrapper page = "first">
          <Button>Page 1</Button>
        </PaginationWrapper>


    </div>
  )
}

export default App
