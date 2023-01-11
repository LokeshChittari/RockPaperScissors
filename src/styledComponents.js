import styled from 'styled-components'

export const MainContainer = styled.div`
  height: 100vh;
  background-color: #223a5f;
  padding-top: 40px;
  padding-bottom: 40px;
`

export const GameContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const ScoreContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ffffff;
  border-radius: 10px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const GameName = styled.h1`
  font-family: Bree Serif;
  color: #ffffff;
  margin: 0;
  padding: 0;
  font-size: 20px;
  width: 60px;
`
export const ScoreCard = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const ScoreHeading = styled.p`
  font-family: Bree Serif;
  color: #223a5f;
  font-size: 22px;
  margin: 0;
  padding: 0;
`
export const GameScore = styled.p`
  font-family: Roboto;
  color: #223a5f;
  font-size: 36px;
  font-weight: bold;
  margin: 0;
  padding: 0;
`
export const GamePlayView = styled.ul`
  width: 100%;
  list-style-type: none;
  padding-left: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 600px;
  }
`

export const GameItem = styled.li`
  width: 50%;
`

export const SelectButton = styled.button`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`

export const GameItemImage = styled.img`
  max-width: 70%;
`
export const GameResultSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    width: 50%;
    max-width: 600px;
  }
`
export const GameItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ChoiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PlayerHeading = styled.h3`
  font-family: Roboto;
  color: #ffffff;
  text-align: center;
`
export const GameResult = styled.p`
  font-family: Roboto;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
`
export const PlayAgain = styled.button`
  width: 180px;
  border-width: 0;
  border-radius: 10px;
  background-color: #ffffff;
  font-family: Bree Serif;
  color: #223a5f;
  padding: 10px;
  cursor: pointer;
  outline: none;
`

export const Rules = styled.button`
  width: 120px;
  border-width: 0;
  border-radius: 10px;
  background-color: #ffffff;
  font-family: Bree Serif;
  color: #223a5f;
  padding: 10px;
  margin-left: auto;
  cursor: pointer;
  outline: none;
  margin-right: 10px;
`

export const PopupModal = styled.div`
  margin: 20px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 10px;

  @media screen and (min-width: 768px) {
    padding: 25px;
  }
`
export const CloseButton = styled.button`
  border-width: 0;
  background-color: transparent;
  cursor: pointer;
  outline: none;
  align-self: flex-end;
`
export const RulesImage = styled.img`
  width: 80%;
  align-self: center;
`
