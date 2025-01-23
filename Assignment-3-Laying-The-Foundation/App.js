import React  from 'react';
import ReactDOM from 'react-dom/client';



const Heading3 = () => (
    <h3 key="h3" className='heading'>   
        Heading 3</h3>
);

//react components
//functional, class based

const HeaderComponent = () => {
    return (
    <div>
        <Heading3 />     
        <h1>This is a functional component</h1>
        </div>
    );
};



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);