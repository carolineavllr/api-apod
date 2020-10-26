const storage = {}

const fetchImage = date => {
  if (storage[date]) {
    return storage[date]
  }
  return fetch(`https://api.nasa.gov/planetary/apod?api_key=aCa6aSPOqLuIAgYRwEiFsuY8iuHQ6kfZPr4MxhVy&date=${date.format('YYYY-MM-DD')}`)
    .then(response => {
      const result = response.json()
      storage[date] = result
      return result
    })
}

export default fetchImage
