import {Component} from 'react'
import Popup from 'reactjs-popup'
import {RiCloseLine} from 'react-icons/ri'
import './App.css'
import {
  MainContainer,
  GameContainer,
  ScoreContainer,
  GameName,
  ScoreCard,
  ScoreHeading,
  GameScore,
  GamePlayView,
  GameItem,
  SelectButton,
  GameItemImage,
  GameResultSection,
  GameItemContainer,
  ChoiceContainer,
  PlayerHeading,
  GameResult,
  PlayAgain,
  Rules,
  PopupModal,
  CloseButton,
  RulesImage,
} from './styledComponents'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

const gameResult = {
  ROCK: {
    ROCK: 0,
    SCISSORS: 1,
    PAPER: -1,
  },
  PAPER: {
    PAPER: 0,
    ROCK: 1,
    SCISSORS: -1,
  },
  SCISSORS: {
    SCISSORS: 0,
    PAPER: 1,
    ROCK: -1,
  },
}

class App extends Component {
  state = {
    score: 0,
    isSubmitted: false,
    result: '',
    myChoice: '',
    opponentChoice: '',
  }

  onClickPlayAgain = () => {
    this.setState({
      isSubmitted: false,
      result: '',
      myChoice: '',
      opponentChoice: '',
    })
  }

  getOpponentChoice = () => {
    const randomNumberIndex =
      Math.floor(Math.random() * 10) % choicesList.length
    const choice = choicesList[randomNumberIndex]
    return choice.id
  }

  updateResult = myChoice => {
    const opponentChoice = this.getOpponentChoice()
    const result = gameResult[myChoice][opponentChoice]
    if (result === 0) {
      this.setState({
        isSubmitted: true,
        myChoice,
        opponentChoice,
        result: 'IT IS DRAW',
      })
    } else if (result === 1) {
      this.setState(prevState => ({
        isSubmitted: true,
        myChoice,
        opponentChoice,
        score: prevState.score + 1,
        result: 'YOU WON',
      }))
    } else {
      this.setState(prevState => ({
        isSubmitted: true,
        myChoice,
        opponentChoice,
        score: prevState.score - 1,
        result: 'YOU LOSE',
      }))
    }
  }

  getSelectedChoiceDetails = selectedId => {
    const selectedChoiceDetails = choicesList.find(
      choice => choice.id === selectedId,
    )
    return selectedChoiceDetails
  }

  renderGamePlayView = () => (
    <GamePlayView>
      {choicesList.map(choice => {
        const onClickGameItem = () => {
          this.updateResult(choice.id)
        }

        return (
          <GameItem key={choice.id}>
            <SelectButton
              type="button"
              onClick={onClickGameItem}
              data-testid={`${choice.id.toLowerCase()}Button`}
            >
              <GameItemImage src={choice.imageUrl} alt={choice.id} />
            </SelectButton>
          </GameItem>
        )
      })}
    </GamePlayView>
  )

  renderGameResultView = () => {
    const {myChoice, opponentChoice, result} = this.state
    const myChoiceDetails = this.getSelectedChoiceDetails(myChoice)
    // console.log(myChoiceDetails)
    const opponentChoiceDetails = this.getSelectedChoiceDetails(opponentChoice)
    // console.log(opponentChoiceDetails)
    return (
      <GameResultSection>
        <GameItemContainer>
          <ChoiceContainer>
            <PlayerHeading>You</PlayerHeading>
            <GameItemImage src={myChoiceDetails.imageUrl} alt="your choice" />
          </ChoiceContainer>
          <ChoiceContainer>
            <PlayerHeading>Opponent</PlayerHeading>
            <GameItemImage
              src={opponentChoiceDetails.imageUrl}
              alt="opponent choice"
            />
          </ChoiceContainer>
        </GameItemContainer>
        <GameResult>{result}</GameResult>
        <PlayAgain type="button" onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </GameResultSection>
    )
  }

  render() {
    const {score, myChoice, opponentChoice, isSubmitted} = this.state
    return (
      <MainContainer>
        <GameContainer>
          <ScoreContainer>
            <GameName>ROCK PAPER SCISSORS</GameName>
            <ScoreCard>
              <ScoreHeading>Score</ScoreHeading>
              <GameScore>{score}</GameScore>
            </ScoreCard>
          </ScoreContainer>
          {isSubmitted === false
            ? this.renderGamePlayView()
            : this.renderGameResultView()}
          <Popup
            trigger={
              <Rules type="button" className="trigger-button">
                RULES
              </Rules>
            }
            modal
            position="center center"
          >
            {close => (
              <PopupModal>
                <CloseButton
                  type="button"
                  className="close-button"
                  onClick={() => close()}
                >
                  <RiCloseLine />
                </CloseButton>
                <RulesImage
                  src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
                  alt="rules"
                />
              </PopupModal>
            )}
          </Popup>
        </GameContainer>
      </MainContainer>
    )
  }
}

export default App
