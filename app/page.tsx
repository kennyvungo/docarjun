import Image from "next/image";

export default function Home() {
  return (
    <main className="w-screen  h-screen flex flex-col justify-center items-center">
      <div className="w-2/3 flex flex-col items-center justify-center">
        <div className="flex flex-row h-fit-content bg-[#F1F5F9]">
          <div className="w-1/2 m-10">
            <div className="leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel sint commodi repudiandae consequuntur
              voluptatum laborum numquam blanditiis harum quisquam eius sed odit
              fugiat iusto fuga praesentium optio, eaque rerum! Provident
              similique accusantium nemo autem. Veritatis obcaecati tenetur iure
              eius earum ut molestias architecto voluptate aliquam nihil,
              eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
              tenetur error, harum nesciunt ipsum debitis quas aliquid.
              Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa
              laudantium molestias eos sapiente officiis modi at sunt excepturi
              expedita sint? Sed quibusdam recusandae alias error harum maxime
              adipisci amet laborum. Perspiciatis minima nesciunt dolorem!
              Officiis iure rerum voluptates a cumque velit
            </div>
            <button>Resume</button>
          </div>
          <div className="w-1/2">
            <Image
              src="/arjun.jpg"
              width={900}
              height={900}
              alt="arjun photo"
            ></Image>
          </div>
        </div>
      </div>
    </main>
  );
}
