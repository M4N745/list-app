import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  text-align: center;
`
export const Button = styled.button`
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  transition: all 500ms;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
  &:active {
    scale: 0.9;
  }
`

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  border: solid 1px rgba(0, 0, 0, 0.2);
  padding: 15px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 30px;
`
export const Form = styled.form`
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`
export const Input = styled.input`
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`
export const Select = styled.select`
  display: flex;
  padding: 0 10px;
  height: 50px;
  align-items: center;
  border: solid 1px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`
export const IconButton = styled(Button)`
  width: 40px;
  height: 40px;
  padding: 0;
  border-radius: 50%;
`
export const IconButtonsGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`
type TableCellProps = {
  $width?: string;
  $center?: boolean;
  $bold?: boolean;
};
export const TableCell = styled.td<TableCellProps>`
  width: ${({ $width }) => $width};
  text-align: ${({ $center }) => $center ? 'center' : 'left'};
  padding: 2.5px 10px;
  vertical-align: middle;
  font-weight: ${({ $bold }) => $bold ? 'bold' : 'normal'};
`
TableCell.defaultProps = {
  $width: 'fit-content',
  $center: false,
  $bold: false,
};

export const TableHead = styled.thead`
 & > tr > td {
   background-color: rgba(0, 0, 0, 0.1);
 }
`
export const TableBody = styled.tbody`
 & > tr:nth-child(even) > td {
   background-color: rgba(0, 0, 0, 0.1);
 }
  & > tr:nth-child(odd) > td {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
export const Table = styled.table`
  border-radius: 10px;
  overflow: hidden;
`
