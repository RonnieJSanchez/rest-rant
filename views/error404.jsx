
const React = require('react')
const Def = require('./default')

function error404 () {
  return (
    <Def>
        <main>
            <h1>404: PAGE NOT FOUND</h1>
            <p>WE AINT FOUND SHIT!</p>
            <div>
              <img src="\images\ice-cream.jpg" alt="broken ice cream" />
              <div>Photo by <a href="https://unsplash.com/@rojekilian?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sarah Kilian</a> on <a href="https://unsplash.com/s/photos/404?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
              </div>
            </div>
        </main>
    </Def>
  )
}

module.exports = error404