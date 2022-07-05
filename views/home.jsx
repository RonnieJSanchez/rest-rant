
const React = require ('react')
const Def = require ('./default')

function home () {
    return (
        <Def>
            <main>
                <h1>Rest-Rant</h1>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
                <div>
                    <img src="\images\kebab.jpg" alt="kebab pic" />
                    <div>
                        photo by <a href="https://unsplash.com/@victoriakosmo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Victoria Shes</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = home 