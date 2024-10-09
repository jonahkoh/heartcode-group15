import { FlipWords } from "@/components/ui/flip-words";

export default function Home() {
  const words: string[] = ["GAY", "FAGGOT", "PIECE OF SHIT"];
  return (
    <div className="bg-no-repeat bg-fixed bg-cover bg-[url('/nodrug.jpg')]">
      <div className="flex flex-col justify-center h-dvh ">
        <p className="[text-shadow:_0_8px_8px_rgb(220_20_60_/_0.8)] text-white text-5xl leading-snug font-manrope font-extrabold font-bold text-5xl text-center">Do drugs if you want to end up like him</p>
        
        <p className="[text-shadow:_0_8px_8px_rgb(220_20_60_/_0.8)] font-bold text-center text-2xl">Take drugs if you indentify as a
      	  <FlipWords words={words}/>
    	  </p>
      </div>
      <div className="bg-no-repeat bg-fixed bg-cover bg-[url('/sunrise.gif')]">
      <div className="flex flex-col justify-center h-dvh ">
        <p className="[text-shadow:_0_8px_8px_rgb(46_139_87_/_0.8)] text-white text-5xl leading-snug font-manrope font-extrabold font-bold text-5xl text-center">When everything seems to be going against you, remember that the airplane takes off against the wind, not with it.</p>
        
      
      </div>
    </div>
    </div>


  );
}