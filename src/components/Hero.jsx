import {logo} from '../assets';

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt="sumz-logo" className='w-28 object-contain'/>
        {/* <button type="button" onClick={()=>window.open()} 
          className='black_btn'>
              Github
        </button> */}
      </nav>

      <h1 className='head_text'>
        <span className='orange_gradient'>Article Digest</span>
      </h1>

      <h2 className='desc'>
      Simplify your reading with Summarizer, a powerful tool that condenses lengthy articles into clear and concise insights.
      </h2>

    </header>
  )
}

export default Hero