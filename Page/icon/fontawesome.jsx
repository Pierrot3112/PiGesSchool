import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@awesome.me/kit-KIT_CODE/icons/classic/solid'

const element = <FontAwesomeIcon icon={faHouse} />

ReactDOM.render(element, document.body)



import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMyIcon } from '@awesome.me/kit-KIT_CODE/icons/kit/custom'
const element = <FontAwesomeIcon icon={faMyIcon} />
ReactDOM.render(element, document.body)

import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas, far, fal } from '@awesome.me/kit-KIT_CODE/icons'

const element = (
  <div>
    <FontAwesomeIcon icon={fas.faHouse} />
    <FontAwesomeIcon icon={far.faMouse} />
    <FontAwesomeIcon icon={fal.faCheese} />
  </div>
)

ReactDOM.render(element, document.body)


import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fak } from '@awesome.me/kit-KIT_CODE/icons'
const element = (
  <div>
    <FontAwesomeIcon icon={fak.faMyIcon} />
    <FontAwesomeIcon icon={fak.faAnotherOne} />
    <FontAwesomeIcon icon={fak.faMyLogo} />
  </div>
)
ReactDOM.render(element, document.body)



<head>
  <!-- Our project just needs Font Awesome Sharp Solid + our Custom Icons -->
  <link href="/your-path-to-fontawesome/css/fontawesome.css" rel="stylesheet" />
  <link
    href="/your-path-to-fontawesome/css/custom-icons.css"
    rel="stylesheet"
  />
  <link href="/your-path-to-fontawesome/css/sharp-solid.css" rel="stylesheet" />
</head>
<body>
  <!-- uses sharp solid style -->
  <i class="fa-sharp fa-solid fa-user"></i>
  <!-- uses Kit custom icon style -->
  <i class="fa-kit fa-your-custom-icon-name"></i>
</body>



/* Step 1: Common Properties
  These styles are required to make icons render reliably */
  .icon::before {
    display: inline-block;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }