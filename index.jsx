import ReactDOM from 'react-dom';

const elementStyle = {
    color: 'blue'
};

const planetElement = <h1 style={elementStyle}>Welcome to my Web Page!</h1>;

ReactDOM.render(
    planetElement,
    document.getElementById('root')
);