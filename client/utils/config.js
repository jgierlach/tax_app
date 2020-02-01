const { token } = JSON.parse(localStorage.getItem('auth')) || ""

export default {
  headers: {
    access_token: token
  }
}