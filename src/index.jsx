import * as $ from 'jquery'
import Post from '@models/post'
import './babel.js'
import './styles/style.css'
import './styles/less.less'
import './styles/scss.scss'
import Logo from './assets/logo_black'
import React from 'react'
import {render} from 'react-dom'

const post = new Post('webpack title', Logo)
console.log(post)
$('pre').addClass('code').html(post.title)

const App = () => (
    <div class="container">
    <h1>Webpack Course</h1>
    <hr/>
    <div class="logo"></div>
    <hr/>
    <pre></pre>
    <hr/>
    <div class="box">
        <h2>Less</h2>
    </div>
    <hr/>
    <div class="card">
        <h2>SCSS</h2>
    </div>
</div>
)

render (<App />, document.getElementById('app'))