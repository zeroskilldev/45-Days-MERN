export const BusinessCard = () => {
  return (
    <div className="h-screen w-screen bg-gray-900 flex justify-center items-center">
      <div className="bg-white border rounded-xl p-6 max-w-2xl text-center box-shadow">
        
       
        <div className="text-black font-bold text-2xl">
          Krish Mewari
        </div>


        <div className="p-3 text-lg">
          Full Stack Developer (Not Now)
        </div>


        <div className="p-5 flex justify-center">
          <img src="src/img/img1.png" alt="" className="rounded h-25" />
        </div>


        <div className="text-lg font-normal">
          Full-stack web developer skilled in the <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong> with hands-on experience in building modern, scalable applications. Proficient in Next.js for creating high-performance, SEO-friendly web solutions.
        </div>


        <div className="mt-8 text-lg font-light font-mono text-left">
          Connect with me -
          <div className="flex ml-5">
            <a href="https://github.com/zeroskilldev" target="_blank" rel="noopener noreferrer">
              <img src="src/img/github.svg" alt="GitHub" className="h-9 cursor-pointer m-2.5"/>
            </a>
            <a href="https://www.linkedin.com/in/krish-mewari-868751314/" target="_blank" rel="noopener noreferrer">
              <img src="src/img/icons8-linkedin.svg" alt="LinkedIn" className="h-9 m-2.5 cursor-pointer"/>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <img src="src/img/icons8-x.svg" alt="X" className="h-9 m-2.5 cursor-pointer ml-4"/>
            </a>
          </div>
        </div>


        <p className="mt-5 text-sm">
          &copy;2025 Made with 💙 By Krish
        </p>
      </div>
    </div>
  );
};
