module.exports = {
    create ({ username, password }) {
      console.log(`Add user ${username} with password ${password}`)
      return Promise.resolve()
    }
}