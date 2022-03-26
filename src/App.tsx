import { useState } from 'react';

import poweredImage from './assets/powered.png';
import leftArrowImage from './assets/leftarrow.png';

import { GridItem } from './components/GridItem';

import { levels, calculateImc, Level } from './helpers/imc';

const App = () => {
  const [heightField, setHeightField] = useState<number>(0);
  const [weightField, setWeightField] = useState<number>(0);
  const [toShow, setToShow] = useState<Level | null>(null);

  const handleCalculateButton = () => {
    if(heightField && weightField) {
      setToShow(calculateImc(heightField, weightField));
    } else {
      alert('Digite todos os campos.')
    }
  }

  const handleBackButton = () => {
    setToShow(null);
    setHeightField(0);
    setWeightField(0);
  }
  
  return(
    <div className="font-sans mb-12">

      <header>
        <div className="max-w-4xl my-10 mx-auto lg:px-5 lg:py-0" >
          <img className="w-40" src={poweredImage} alt="" />
        </div>
      </header>

      <div className='flex max-w-4xl m-auto lg:px-5 lg:py-0 lg:flex-col'>

        <div className='flex-1 mr-10 lg:mr-0'>

          <h1 className='font-medium leading-tight text-5xl mt-0 mb-5 text-cyan-700'>Calcule o seu IMC</h1>
          <p className='font-normal leading-normal mt-0 mb-4 text-gray-800'>
            IMC significa Índice de Massa Corporal e trata-se de uma medida do peso de cada pessoa, sendo uma relação entre a massa da pessoa e a sua altura ao quadrado.
          </p>

          <input
            className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              mt-10
              mb-5
              drop-shadow-lg
              focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none
              disabled:opacity-60
            '
            type="number"
            placeholder='Digite a sua altura. Ex: 1.8 (em metros)'
            value={heightField > 0 ? heightField : ''}
            onChange={e => setHeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />
          <input
            className='
              form-control
              block
              w-full
              px-3
              py-1.5
              text-base
              font-normal
              text-gray-700
              bg-white bg-clip-padding
              border border-solid border-gray-300
              rounded
              transition
              ease-in-out
              mb-8
              drop-shadow-lg
              focus:text-gray-700 focus:bg-white focus:border-cyan-700 focus:outline-none
              disabled:opacity-60
            '
            type="number"
            placeholder='Digite o seu peso. Ex: 80.0 (em kg)'
            value={weightField > 0 ? weightField : ''}
            onChange={e => setWeightField(parseFloat(e.target.value))}
            disabled={toShow ? true : false}
          />

          <button 
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-2.5 w-full bg-cyan-700 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-cyan-800 hover:shadow-lg focus:bg-cyan-800 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-cyan-900 active:shadow-lg transition duration-150 ease-in-out disabled:opacity-60 lg:mb-10"
            onClick={handleCalculateButton}
            disabled={toShow ? true : false}
          >
            Calcular
          </button>
        </div>
        <div className='flex flex-1 ml-10 lg:ml-0'>
          {!toShow &&
            <div className='flex-1 grid grid-cols-2 gap-5 sm:grid-cols-1'>
              {levels.map((item, key) => (
                <GridItem key={key} item={item}/>
              ))}
            </div>
          }
          {toShow &&
            <div className='flex-1 flex'>
              <div className='absolute rounded-full w-16 h-16 bg-cyan-700 flex justify-center items-center cursor-pointer -ml-9 mt-36 transition-all delay-150 hover:opacity-80 lg:ml-0 lg:mt-0 lg:rounded-lg' onClick={handleBackButton}>
                <img src={leftArrowImage} alt="" width={25}/>
              </div>
              <GridItem item={toShow}/>
            </div>
          }
        </div>

      </div>
    </div>
  );
}

export default App
