
const React = require ('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
            <div>
                    <img src="\images\kebab.jpg" alt="kabob pic" />
                <div>
                    photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                </div>
            </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home 