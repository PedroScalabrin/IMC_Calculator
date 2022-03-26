export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: number[];
    yourImc?: number;
}

export const levels: Level[] = [
    { title: 'Magreza', color: 'bg-gray-500', icon: 'down', imc: [0, 18.5] },
    { title: 'Normal', color: 'bg-green-500', icon: 'up', imc: [18.6, 24.9] },
    { title: 'Sobrepeso', color: 'bg-amber-500', icon: 'down', imc: [25, 30] },
    { title: 'Obesidade', color: 'bg-red-500', icon: 'down', imc: [30.1, 99] },
];

export const calculateImc = (height: number, weight: number) => {
    const imc = weight / (height**2);

    for( let i in levels) {
        if(imc >= levels[i].imc[0] && imc <= levels[i].imc[1]) {
            let levelCopy: Level = {...levels[i]};

            levelCopy.yourImc = parseFloat(imc.toFixed(1));
            return levelCopy;
        }
    }

    return null;
}