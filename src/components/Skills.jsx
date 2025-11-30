
export default function Skills(){
   
        const skills=[{

            img:"./src/assets/html-5.png",
            title:"HTML",

        },
        {

            img:"./src/assets/css-3.png",
            title:"CSS",

        },
        {

            img:"./src/assets/js.png",
            title:"JAVASCRIPT",

        },
        {

            img:"./src/assets/physics.png",
            title:"REACT",

        },
        {

            img:"./src/assets/python.png",
            title:"PYTHON",

        },
        {

            img:"./src/assets/sql-server.png",
            title:"MYSQL",

        },

];

return(
     <section id="skills"className="bg-gradient-to-b from-[#020617] to-[#0c1222] py-24">
       <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Skills
        </h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6  py-10 place-items-center">
        {skills.map((skill,ind)=>(
        <div
          key={ind}
          className="bg-slate-800  rounded-2xl p-6 flex flex-col items-center justify-center
          shadow-lg hover:shadow-xl transition hover:scale-105 duration-300 w-60"
        >
        <img src={skill.img} className="h-16 w-16 mb-5"/> 
        <h3 className="text-white font-semibold"> {skill.title} </h3>




</div>
        ))}







    </div>
    </section>
);

}
