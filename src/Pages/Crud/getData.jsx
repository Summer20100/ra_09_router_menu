import { useState, useEffect } from 'react'

const url = 'https://jsonplaceholder.typicode.com/users'


export function getData(url) {
  const [data, setData] = useState([])
  
    function getApi(url) {
        fetch(url)
        .then((response) => {
            if (!response.ok || response.status !== 200 || response.json.name !== 'json') {
              throw new Error('Invalid!')
            }
            return response.json()
        })
        .then((data) => {
          setData(data)
        })
        .catch((err) => {
          throw new Error('Invalid!')
        })
    }
    useEffect(() => {
        getApi(url)
    }, [url])

  return data
}