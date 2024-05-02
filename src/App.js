import React, {useState} from 'react';
import TypeaHeadComponent from './components/TypeaHeadComponent';
import './App.css';


const App = () => {

    const [setOptions, updateOption] = useState(); 

    const onChangeUpdateOption = (option) => {
        updateOption(option);
    };

    const options = ["Samsung","Nokia","Vivo","IQOO","RedMi","realme","Apple", "Poco","Infinix"];

    const imageOptions = {
        Samsung: 'https://images.pexels.com/photos/1447254/pexels-photo-1447254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Nokia: 'https://images.pexels.com/photos/5741605/pexels-photo-5741605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Vivo: 'https://i.imghippo.com/files/3bveI1714613374.jpg',
        IQOO: 'https://i.imghippo.com/files/IOnCW1714613525.avif',
        RedMi: 'https://i.imghippo.com/files/iaqiK1714613629.jpg',
        realme:'https://i.imghippo.com/files/DiElP1714613724.jpg',
        Apple:'https://images.pexels.com/photos/9434647/pexels-photo-9434647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        Poco:'https://i.imghippo.com/files/DIrCX1714614080.jpg',
        Infinix: 'https://i.imghippo.com/files/MY0jZ1714613859.jpg',
    
    }

    return (
        <div className='app-container'>
        <h1 className='main-heading'>TypeaHead Component</h1>
      <TypeaHeadComponent options={options} onSelect={onChangeUpdateOption} />
        {setOptions && <p className='option'>Selected Option: <span className='select-option'>{setOptions}</span></p>}
        {imageOptions[setOptions] && (
            <img src={imageOptions[setOptions]} alt={setOptions} className='image'/>
        )}
        </div>
    )

}

export default App;
