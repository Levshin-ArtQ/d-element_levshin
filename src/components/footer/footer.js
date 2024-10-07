import './footer.scss';

const sampleClients = [
  'LOGO CLIENT 1',
  'LOGO CLIENT 2',
  'LOGO CLIENT 3',
  'LOGO CLIENT 4',
  'LOGO CLIENT 5',
  'LOGO CLIENT 6',
  'LOGO CLIENT 7',
  'More Client',
]

export  function initializeFooter() {
  const footer = document.querySelector('.footer');
  const clientTable = document.querySelector('.client-section__table');

  sampleClients.map((element, index) => {
    let newNode = document.createElement('span');
    newNode.classList.add('client-table__item');
    newNode.textContent = element;
    footer.appendChild(newNode);
  })

}