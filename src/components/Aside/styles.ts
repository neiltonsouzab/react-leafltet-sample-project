import styled from 'styled-components';
import { animated } from 'react-spring';

export const Wrapper = styled(animated.aside)`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 600px;
  height: 100%;
  padding: 40px;

  position: absolute;
  z-index: 999999;
  
  background: #FFF;
  box-shadow: -5px 0px 10px 0px rgba(0,0,0,0.5);

  overflow: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  left: 24px;
  padding: 4px;

  display: flex;
  align-items: center;

  font-size: 0px;
  border: 0;
  background: 0;
  border-radius: 64px;
  cursor: pointer;

  transition: background 0.3s;

  &:hover {
    background: #EEE;
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-size: 24px;
  font-weight: normal;

  color: #2F8FE9;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SectionTitle = styled.strong`
  font-size: 16px;
  color: #2F8FE9;
`;

export const SectionLink = styled.a`
  font-size: 14px;
  color: #2F8FE9;
  cursor: pointer;
`;

export const AddressContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Address = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  
  p {
    font-size: 16px;
    font-weight: 400;
    color: #545454;
  }

  span {
    font-size: 16px;
    font-weight: 400;
    color: #989898;
  }
`;

export const Divider = styled.hr.attrs({
  color: '#F5F5F5'
})`
  border-top: 1px;
`;

export const AttributesSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const AttributesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`;

export const AttributeColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Attribute = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  p {
    font-size: 14px;
    font-weight: 500;
    color: #545454;
  }

  span {
    font-size: 14px;
    font-weight: 400;
    color: #545454;
  }
`;

export const OcurrencesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Ocurrence = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  border-radius: 10px;

  background: rgba(47, 143, 233, 0.1);
  cursor: pointer;

  outline: transparent;
  transition: color 2s, outline-color .3s;
  
  &:hover {
    outline: 1px solid #2F8FE9;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const OcurrenceDate = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    color: #545454;
  }
`;

export const OcurrenceType = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    font-size: 14px;
    color: #545454;
  }
`;

export const OcurrenceStatus = styled.span`
  font-size: 14px;
  color: #EB5757;
  text-align: center;
`;

export const OcurrenceNumber = styled.span`
  font-size: 14px;
  color: #2F8FE9;
  text-align: center;
`;