import styled from 'styled-components';

const color = [
  'linear-gradient(60deg, #66bb6a, #43a047)',
  'linear-gradient(60deg, #ffa726, #fb8c00)',
  'linear-gradient(60deg, #ef5350, #e53935)',
];
const randomColorUser = Math.floor(Math.random() * color.length);
const randomColor = Math.floor(Math.random() * color.length);

export const TextField = styled.input`
  margin 5px;
  width: 100%;
  height: 5vh;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none !important;
  :focus {
    color: #212529;
    background-color: #fff;
    border-color: #86b7fe;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgb(13 110 253 / 25%);
  }
  :invalid:not(:focus):not(:placeholder-shown) {
    background: pink;
  }
  :not(:placeholder-shown) { 
    :valid {
      border: 1px solid greenyellow;
    }
    :invalid{
      border: 1px solid red;
    }
  }
`;
export const CardColorAddUser = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 15px;
  margin: -30px 100px 5px -170px;
  background: ${color[randomColorUser]};
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%), 0 7px 10px -5px rgb(76 175 80 / 40%);
  height: 60px;
  width: 60px;
`;

export const Card = styled.div`
  color: rgba(0, 0, 0, 0.87);
  width: 40vw;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  position: relative; 
  font-size: .875rem;
  min-width: 0;
  background: #FFF;
  box-shadow: 0 1px 4px 0 rgb(0 0 0 / 14%);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
}
`;

export const UserCard = styled.div`
  color: white;
  width: 35vw; 
  height: 15vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative; 
  min-width: 0;
  background: ${color[randomColor]};
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 14%),
    0 7px 10px -5px rgb(76 175 80 / 40%);
  margin-top: 30px;
  border-radius: 6px;
  margin-bottom: 30px;
  font-size: 140%;
}
`;
export const SubmitBtn = styled.button`
  margin 10px;
  min-width: 64px;
  width: 15vw;
  background-color: #3f51b5;
  color: #fff;
  font-size: 1rem;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  outline: none !important;
  padding: 6px 16px;
  box-sizing: border-box;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  line-height: 1.75;
  border-radius: 4px;
  letter-spacing: 0.02857em;
  border: none;
  :hover {
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    background-color: #303f9f;
  }
  :active {
    box-shadow: 0px 5px 5px -3px rgb(0 0 0 / 20%),
      0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%);
  }
`;
