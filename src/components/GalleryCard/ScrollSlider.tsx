export default function ScrollSlider({ painting }) {
  return (
    <div className='flex items-center snap-center'>
      <div className="relative overflow-hidden">
        <img src={painting?.image} alt="A London skyscraper" className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] object-center object-cover" />
      </div>
    </div>
  );

}
