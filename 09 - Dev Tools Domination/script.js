const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';
}

    // Regular
    console.log('hello');

    // Interpolated
    console.log('Hello I am a %s string!', 'short');

    // Styled
    console.log('%c I am some great text', 'font-size: 50px;');

    // warning!
    console.warn('OH NOOOO');

    // Error :|
    console.error('Oops!');

    // Info
    console.info('Crocodiles eat 3-4 people per year');

    // Testing
    const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is incorrect!');

    // clearing
    console.clear();

    // Viewing DOM Elements
    console.log(p);
    console.dir(p);
    
    console.clear();

    // Grouping together
    dogs.forEach(dog => {
        console.groupCollapsed(`${dog.name}`);
        console.log(`This is ${dog.name}`);
        console.log(`${dog.name} is ${dog.age} years old`);
        console.log(`${dog.name} is ${dog.age * 7} dog years old`);
        console.groupEnd(`${dog.name}`);
    });

    // counting
    console.count('Apple');
    console.count('Apple');
    console.count('Apple');
    console.count('Orange');
    console.count('Apple');
    console.count('Orange');
    console.count('Apple');

    // timing
    console.time('fetching data');
    fetch('https://api.github.com/users/jhuppe')
      .then(data => data.json())
      .then(data => {
          console.timeEnd('fetching data');
          console.log(data);
      });

      //table
      console.table(dogs);
