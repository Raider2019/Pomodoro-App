
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaWindowClose } from 'react-icons/fa';
import {Formik,Form,Field } from 'formik';
import { useContext } from 'react';
import { StateContext } from '../StateProvider';

const ModalContainer = ({ isOpen, onClose }) => {
  const{ workTime,  setWorkTime,shortBreakTime,setShortBreakTime,longBreakTime,setLongBreakTime} = useContext(StateContext)
  return (
    <Container>
      <ModalContent initial={{ y: "-100vh", scale: 0 }} animate={{ y: 0, scale: 1 }} exit={{ y: "-100vh", scale:0}}>
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton onClick ={onClose}><FaWindowClose fontSize="5rem"/></ModalCloseButton>
        </ModalHeader>
        <ModalBody>
          <Formik initialValues={{ work: workTime / 60, short: shortBreakTime /60 , long: longBreakTime / 60 }} onSubmit={(values) => {
            setWorkTime(values.work * 60);
            setShortBreakTime(values.short * 60);
            setLongBreakTime(values.long * 60);
            onClose();
          }}>
            <Form>
              <InputWrapper>
                <FormControl>
                  <label htmlFor='work'>Work</label>
                  <Field name = "work" type="number" min = "1" max = "60"/>
                </FormControl>
                      <FormControl>
                  <label htmlFor='short'>Short Break</label>
                  <Field name = "short" type="number"  min = "1" max = "30"/>
                </FormControl>
                      <FormControl>
                  <label htmlFor='long'>Long Break</label>
                  <Field name = "long" type="number" min = "1" max = "60"/>
                </FormControl>
              </InputWrapper>
              <ButtonWrapper>
                  <ApplyButton type = "submit">Apply</ApplyButton>
              </ButtonWrapper>
      
            </Form>
</Formik>
        </ModalBody>
      </ModalContent>
     </Container>
  )
}

export default ModalContainer
const Container = styled.div`
  position:absolute;
  display:grid;
  place-items:center;
  height: 100vh;
  width: 100vw;
  z-index:150;
`;

const ModalContent = styled(motion.div)`
width:60rem;
height:40rem;
background-color:#FFF;
@media  (max-width: 600px) {
  width:90%;
  padding: 1rem;
}
  
`;
const ModalHeader = styled.div`
  color: #000;
  padding: 2rem;
  display:flex;
  justify-content: space-between;
  border-bottom:1px solid #000;
`
const ModalTitle = styled.h1`
  font-size:5rem;
`;
const ModalCloseButton = styled.button`
  all:unset;
`
const ModalBody = styled.div`
  
`
const InputWrapper = styled.div`
  display:flex;
  padding: 1rem;
  gap:2rem;
`
const FormControl = styled.div`
  flex:1;
  width: 100%;
  display:flex;
  flex-direction:column;
  color:#000; 
  gap:0.7rem;
  label{
    font-size:2rem;
  }
  input{
    width:100%;
    font-size:2rem;
    padding:1rem;
    border-radius:1rem;
    border:1px solid #000;
    background:#ead8fc
  }
`;
const ButtonWrapper = styled.div`
  display:flex;
  justify-content:flex-end;
  padding: 2rem;
`
const ApplyButton = styled.button`
all:unset;
  padding: 2rem 6rem;
  font-size:2rem;
  background-color: ${(props) => props.theme.colors.primary};
  border-radius:0.5rem;
`;