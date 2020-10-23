import styled from 'styled-components'

export default function Home() {
  
  return (
    <Box>
      <Title>today, 10/22/2020</Title>
      <Image>
        <img src="https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/p1010816.jpg" />
        <Description>
          <h1>Tagging Bennu</h1>
          <div>On October 20, after a careful approach to the boulder-strewn surface, the OSIRIS-REx spacecraft's arm reached out and touched asteroid Bennu. Dubbed a Touch-And-Go (TAG) sampling event, the 30 centimeter wide sampling head (TAGSAM) appears to crush some of the rocks in this snapshot. The close-up scene was recorded by the spacecraft's SamCam some 321 million kilometers from planet Earth, just after surface contact. One second later, the spacecraft fired nitrogen gas from a bottle intended to blow a substantial amount of Bennu's regolith into the sampling head, collecting the loose surface material. Data show the spacecraft spent approximately 5 more seconds in contact with Bennu's Nightingale sample site and then performed its back-away burn. Timelapse frames from SamCam reveal the aftermath.</div>
        </Description>
      </Image>
      <Absolute>
        <span className="material-icons shake-horizontal">arrow_forward</span>
      </Absolute>
    </Box>
  )
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
  left: 0;
  bottom: 0;
  opacity: 0;
  margin: 20px;
  padding: 20px;
  color: #EFEEF5;
  transition: .5s;
  position: absolute;
  background: #321b36db;
`

const Absolute = styled.a`
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
