import React from 'react'
import fetchImage from '../../api.js'
import moment from 'moment'
import { Box, Text, Title } from '../../components/index.js'
import { useRouter } from  'next/router'
import styled from 'styled-components'

export default function Date(props) {
  const router = useRouter()

  return !props.data
  ? 'no data'
  : <Box>
      <Back onClick={() => router.push({ pathname: '/', query: { date: props.data.date } }) }>back</Back>
      <Title>{ props.data.title }</Title>
      <Text>
        { props.data.explanation }
        <img src={ props.data.url } alt={ props.data.title } />
      </Text>
    </Box>
}

export async function getServerSideProps({ params }) {
  const date = moment(params.date, 'YYYY-MM-DD')
  return fetchImage(date.isValid() ? date : moment())
    .then(data => ({
      props: { data }
    }))
    .catch(err => ({}))
}

const Back = styled.button`
wdw`