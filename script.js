/*           <li>
            <a href="">plan</a>
            <ul>
              <li>
                <a href="">Getting Started </a>
              </li>
              <li>
                <a href="">Apply </a>
              </li>
              <li>
                <a href="">Finance </a>
              </li>
              <li>
                <a href="">Study </a>
              </li>
              <li>
                <a href="">Work </a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">search</a>
            <ul>
              <li>
                <a href="">Undergraduate</a>
              </li>
              <li>
                <a href="">Trades</a>
              </li>
              <li>
                <a href="">Graduate</a>
              </li>
              <li>
                <a href="">Micro-credentials</a>
              </li>
              <li>
                <a href="">Continuing Ed</a>
              </li>
              <li>
                <a href="">Institution / Community</a>
              </li>
              <li>
                <a href="">Who Offers What</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">apply</a>
            <ul>
              <li>
                <a href="">Apply</a>
              </li>
            </ul>
          </li>

          <li>
            <a href="">help</a>
            <ul>
              <li>
                <a href="">Questions?</a>
              </li>
              <li>
                <a href="">How to Search</a>
              </li>
              <li>
                <a href="">How to Apply</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">About EPBC</a>
              </li>
            </ul>
          </li>
 */

const menuData = [
  {
    label: 'plan',
    items: [
      'Getting Started',
      'Apply',
      'Finance',
      'Study',
      'Work'
    ],
  },
  {
    label: 'search',
    items: [ 
      'Undergraduate',
      'Trades',
      'Graduate',
      'Micro-credentials',
      'Continuing Ed',
      'Institution / Community',
      'Who Offers What',
    ],
  },
  {
    label: 'apply',
    items: [
      'Apply',
    ],
  },
  {
    label: 'help',
    items: [
      'Questions?',
      'How to Search',
      'How to Apply',
      'Contact Us',
      'About EPBC',
    ],
  }
]

renderMenu(menuData);

function renderMenu(data) {
  const menu = document.querySelector('.menu');

  let html = '';

  for (const o of data) {
    html += `<li>
      <a href="">${o.label}</a>
      <ul>`;

    for (const item of o.items) {
      html += `<li><a href="">${item}</a></li>`;
    }

    html += `</ul>
    </li>`;
  }

  menu.innerHTML = html;
} 

const car = {
  vendor: 'Ford',
  model: 'Mustang',
  year: 1969,
  color: 'red',
  mileage: 50000,
  isNew: true,
  owners: [
    {
      name: 'John',
    },
    {
      name: 'Mary',
    }
  ]
}

const a = 3;
const b = 4;

const total = sum(a, b);

console.log(total);

function sum(x, y) {
  return x + y;
}

