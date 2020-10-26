import React from 'react'
import moment from 'moment'
import fetchApiImage from '../api.js'
import Link from 'next/link'
import { Absolute, ArrowLeft, ArrowRigth, Box, Description, Image, ImageDay, Title } from '../components/index.js'
import { withRouter } from 'next/router'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: moment(),
      picture: undefined,
      loading: true
    }
  }

  componentDidMount() {
    const date = this.props.router.query.date
    if (date) {
      this.setState({ date: moment(date, 'YYYY-MM-DD') }, () => {
        this.fetchImage()
        .then(() => this.setState({ loading: false }))
      })
    } else {
      this.setState({ loading: false })
    }
  }

  fetchImage = () => (
    fetchApiImage(this.getStateDate())
      .then(this.updateImage)
  )

  updateImage = ({ url, date, title, explanation }) => {
    this.setState({ picture: { url, date, title, explanation }})
  }

  changeDate = payload => {
    this.setState({ date: this.getStateDate().add(payload, 'days'), loading: true }, () => {
      this.fetchImage()
        .then(() => this.setState({ loading: false }))
    })
  }

  getStateImage = () => (
    this.state.picture
  )

  getStateDate = () => (
    this.state.date
  )

  isLoading = () => (
    this.state.loading
  )

  render() {
    return (
      this.isLoading()
      ? <p style={{ color: '#FFF', position: 'absolute', left: '50%', top: '50%' }}>loading...</p>
      : <Box>
        { !this.getStateImage()
            ? (
              <>
                <Title>welcome to Nasa gallery</Title>
                <Image>
                  <img src="/Rocket.png" />
                </Image>
                <Absolute onClick={() => this.fetchImage()}>
                  Start
                </Absolute>
              </>
            )
            : (
              <>
                <Title>image of the day {this.getStateImage().date}</Title>
                <Link href={`/images/${this.getStateDate().format('YYYY-MM-DD')}`}>
                  <ImageDay>
                    <img src={this.getStateImage().url} />
                    <Description>more information</Description>
                  </ImageDay>
                </Link>
                <ArrowLeft onClick={() => this.changeDate(-1)}>arrow_back</ArrowLeft>
                <ArrowRigth onClick={() => this.changeDate(1)}>arrow_forward</ArrowRigth>
              </>
            )
        }
      </Box>
    )
  }
}

export default withRouter(Home)