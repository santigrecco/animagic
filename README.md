# Animagic
Library for making animations easier in web apps, made with rxjs observables

```
  import { Animate } from 'animagic'
  
  let element = document.getElementById('element')
  
  Animate(element, {
    animation: 'anAnimation 2s linear'
  })
```


## Installation 

```
  npm i animagic 
```

## Usage

Animate method receives two parameters: 
  * **[Element]** - The html element to be animated
  * **[config]**  - A json object with the configuration for the animation: 
    * before: the class to be applied before the animation
    * animation: the name and properties of the animation itself (can't be null)
    * after: the class to be apllied after the animation is finished

```
  import { Animate } from 'animagic'
  
  let element = document.getElementById('element')
  
  Animate(element, {
    before: 'aBeforeClass',
    animation: 'animation 2s linear',
    after: 'aAfterClass'
  })
```

