import _ from 'lodash'
import myName from './myName'
import './style.css'

function component() {
    const element = document.createElement('div')
    //element.innerHTML = _.join(['Hello', 'webpack'], ' ')
    element.classList.add('hello')

    element.textContent = myName('Cody')

    return element

}

document.body.appendChild(component());