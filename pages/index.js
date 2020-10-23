import styled from 'styled-components'
import React from 'react'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      url: undefined,
      date: undefined
    }
  }

  getFirstImage() {
    fetch('https://api.nasa.gov/planetary/apod?api_key=aCa6aSPOqLuIAgYRwEiFsuY8iuHQ6kfZPr4MxhVy&date=2020-10-22')
      .then(response => (
        response.json()
      ))
      .then(data => {
        this.setState({
          url: data.url,
          date: data.date,
          title: data.title,
          explanation: data.explanation,
        })
      })
  }

  render() {
    return <Box>
      { !this.state.url
          ? (
            <>
              <Title>Welcome to Nasa gallery</Title>
              <Image>
                <img src="/Rocket.png" />
              </Image>
              <Absolute onClick={() => this.getFirstImage()}>
                Start
              </Absolute>
            </>
          )
          : (
            <>
              <Title>image of the day {this.state.date}</Title>
              <ImageDay>
                <img src={this.state.url} />
                <Description>more information</Description>
              </ImageDay>
              <ArrowRigth>
                <span className="material-icons shake-horizontal">arrow_forward</span>
              </ArrowRigth>
            </>
          )
      }
    </Box>
  }
}

const Box = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto;
  overflow: hidden;
  align-items: center;
  text-align: center;
  max-width: 1280px;
  position: relative;
  flex-direction: column;
`

const Title = styled.h1`
  color: #EFEEF5;
  margin-top: 50px;
  font-size: 3rem;
`

const Image = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const Absolute = styled.div.attrs({
  className: 'shake-vertical'
})`
  bottom: 50px;
  color: #EFEEF5;
  position: absolute;
  background: #59ce32;
  padding: 10px 50px;
  border-radius: 100px;
  font-size: 2rem;
  cursor: pointer;
`

const ImageDay = styled.div`
  width: 100%;
  height: 75%;
  max-width: 800px;
  position: relative;
  &:hover div {
    opacity: 1;
  }
  img {
    width: 100%;
    height: 100%;
    transition: .5s;
    object-fit: cover;
  }
`

const Description = styled.div`
  bottom: 50%;
  left: calc(50% - 90px);
  opacity: 0;
  padding: 20px;
  color: #EFEEF5;
  transition: .5s;
  position: absolute;
  background: #321b36;
  cursor: pointer;
`

const ArrowRigth = styled.a`
  top: 50%;
  right: 0;
  color: #EFEEF5;
  position: absolute;
  padding: 10px 50px;
  border-radius: 100px;
  span {
    font-size: 60px;
  }
`