import OscillatingIcon from "./OscillatingIcon"

const Footer = ()=> <footer className="bg-gray-800 flex flex-col justify-center px-16 py-24 text-white">
  <div className="">
    <a href="#">
  <OscillatingIcon icon={"bx bx-chevron-up"} styles={"text-center text-4xl pb-10"}/></a>



  <div className="flex justify-center gap-16 pb-10">
    <a href="https://github.com/Techboy07"> <div><i className="bx bxl-github text-4xl"></i></div>
</a>
    <a href="https://www.linkedin.com/in/tolu-temi-557775162?trk=contact-info">
    <div><i className="bx bxl-linkedin text-4xl"></i></div>
      </a>
  </div>

  <div className="border-0 border-b border-white mb-16"></div>

  <p className="text-xl text-center font-light">2023 Babatunde Toluwalase</p>
</div>



</footer>


export default Footer;
