
import './card.css'

function CardPj({ img, text, headers }) {
    return (
        <div className="card-pj rounded-xl transition-all" >
            <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                <img className="w-full" src={img} alt="Sunset in the mountains" />
                <div className=" bg-white  px-6 py-4">
                    <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
                    <p className="text-gray-700 text-base">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardPj;