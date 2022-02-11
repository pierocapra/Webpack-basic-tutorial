import './heading.scss';

class Heading {
  render() {
    const h2 = document.createElement('h2');
    const body = document.querySelector('body');
    h2.innerHTML = 'Webpack is awesome';
    body.appendChild(h2);
  }
}
export default Heading;
