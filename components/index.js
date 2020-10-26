import styled from 'styled-components'

export const Box = styled.div`
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

export const Title = styled.h1`
  color: #EFEEF5;
  margin-top: 50px;
  font-size: 3rem;
`

export const Image = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Absolute = styled.div.attrs({
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

export const ImageDay = styled.div`
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

export const Description = styled.div`
  bottom: 50%;
  left: calc(50% - 90px);
  opacity: 0;
  padding: 20px;
  color: #EFEEF5;
  transition: .5s;
  position: absolute;
  background: #321b36;
  border-radius: 100px;
  cursor: pointer;
`

export const ArrowRigth = styled.a.attrs({
  className: 'material-icons shake-horizontal'
})`
  top: 50%;
  right: 0;
  color: #EFEEF5;
  position: absolute;
  padding: 10px 50px;
  border-radius: 100px;
  cursor: pointer;
  span {
    font-size: 60px;
  }
`

export const ArrowLeft = styled.a.attrs({
  className: 'material-icons shake-horizontal'
})`
  top: 50%;
  left: 0;
  color: #EFEEF5;
  position: absolute;
  padding: 10px 50px;
  border-radius: 100px;
  cursor: pointer;
  span {
    font-size: 60px;
  }
`

export const Text = styled.div`
font-size: 1.2rem;
max-width: 800px;
text-align: left;
color: white;
overflow: auto;
img {
  width: 100%;
  margin-top: 20px;
}
`