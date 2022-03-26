import { Level } from "../helpers/imc";
import upImage from "../assets/up.png";
import downImage from "../assets/down.png";

type Props = {
    item: Level
}

export const GridItem = ({ item }: Props) => {
    return (
        <div className={`
            ${item.color}
            flex
            flex-1
            text-white
            rounded-lg
            justify-center
            items-center
            flex-col
            p-5
            shadow-xl
        `}>

            <div className="w-16 h-16 rounded-full bg-black/[.1] flex justify-center items-center">
                <img src={item.icon === 'up' ? upImage : downImage} alt="" width={30}/>
            </div>{/* ICON*/}

            <div className="text-xl font-bold mt-1.5">
                {item.title}
            </div>{/* TITLE*/}
                
            {item.yourImc &&
                <div className="text-base mt-2.5 mb-12">Seu IMC é {item.yourImc} kg/m²</div>
            }
                
            <div className="text-xs mt-3.5">
                <>
                    IMC está entre <strong>{item.imc[0]}</strong> e <strong>{item.imc[1]}</strong>
                </>
            </div>{/* INFO*/}

        </div>
    );
}