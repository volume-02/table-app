import axios from 'axios'

export const getData = (page?: Number) => {
  return axios.get('http://jsteam.sibedge.com/raw/task/users.json', {params: {page}})
}