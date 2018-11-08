import styled from 'styled-components';

export const MainWrapper = styled.div`
  display: flex; 
  flex-direction: column;
  max-width: 30rem;
  margin: auto; 
  text-align: left;
  margin-top: 50px;
  `
;

MainWrapper.pageHeading = styled.h2`
  font-size: 21px;
  margin: 10px 0 20px;
  border-bottom: 2px solid #414141;
  padding-bottom: 10px;
  text-transform: uppercase;
  `
;

MainWrapper.formBox = styled.div`
  padding: 0 0 20px;
 `
;
MainWrapper.inputFields = styled.div`
  display: flex;
  color: #666;
  input[type=text],
  input[type=text]:focus{
    border-radius: 5px;
    width: 400px;
    border: 1px solid #666;
    font-size: 1rem;
    padding: 5px 10px;
    color: #666;
    outline: 0;
  }
  button,
  button:focus {
    backgorund: none;
    border: none;
    padding: 10px;
    color: #666;
    font-size: 1rem;
    outline: 0;
  }
`
;
MainWrapper.contentBox = styled.div`
  padding: 20px 10px;
  .row {
    .item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px solid #666;
      font-size: 1rem;
      align-items: center;
      &:first-child {
        padding-top: 0px;
      }
      .checkbox {
        position: relative;
        input[type=checkbox] {
          opacity: 0;
          position: absolute;
        }
        .checkedIcon {
          border: 1px solid #ccc;
          background: #fff;
          padding: 7px;
          border-radius: 3px;
        }
      }
      .item-name{
        flex-grow: 1;
        margin-left: 10px;
        &.item-name-completed {
          text-decoration: line-through;
        }
      }
      .item-edit{
        flex-grow: 1;
        margin-left: 10px;
        input {
          border-radius: 5px;
          width: 200px;
          border: 1px solid #666;
          font-size: 1rem;
          padding: 10px;
          color: #666;
          outline: 0;
        }
      }
      .todo-actions {
        a,
        a:hover {
          text-decoration: none;
          color: #666;
          &:last-child {
            margin-left: 10px;
          }
        }
      }
    }
  }
  `
;

MainWrapper.pointNoted = styled.div`
  font-size: 0.875rem;
  background: #e2e2e2;
  border: 1px soild #ccc;
  padding: 10px;
  margin-top: 40px;
`
;