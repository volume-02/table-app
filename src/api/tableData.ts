import axios from 'axios'

export const getData = () => {
  return axios.get('http://jsteam.sibedge.com/raw/task/users.json?page=2')
}