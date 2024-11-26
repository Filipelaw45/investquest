import Link from "next/link";

export default function Header(){
    return(
      <>
    <nav className="flex items-center flex-wrap justify-between bg-white fixed w-full z-10 top-0 py-3">

        <div className="flex items-center top-0">
        <div className="ml-5">
			<Link href="/">
			    <img className="h-12" src="/img/LOGO.png" alt="Logo" />
			</Link>
        </div>

        <div>
			<ul className="list-reset lg:flex flex-1 items-center">
				<li className="mr-3">
					<a className="inline-block text-black text-xl no-underline hover:text-underline py-2 px-4" href="#">RECURSOS</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-black text-xl no-underline hover:text-underline py-2 px-4" href="#">AIRDROP</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-black text-xl no-underline hover:text-underline py-2 px-4" href="#">LEADERBOARD</a>
				</li>
				<li className="mr-3">
					<a className="inline-block text-black text-xl no-underline hover:text-underline py-2 px-4" href="#">DRACOIN</a>
				</li>
                <li className="mr-3">
					<a className="inline-block text-black text-xl no-underline hover:text-underline py-2 px-4" href="#">MISSÕES</a>
				</li>
			</ul>
        </div>
        </div>

        <div className="flex gap-4 mr-10">
            <Link href="/login"><button className="px-8 border-2 border-primary-blue">ENTRAR</button></Link> 
            <Link href="/signup"><button className="px-12 bg-primary-blue text-white ">CADASTRAR-SE</button></Link> 
        </div>
	</nav>
      </>
    )
  }