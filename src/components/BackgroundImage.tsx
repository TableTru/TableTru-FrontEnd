import Search from "./SearchBar";


export default function BackgroundCard (){
    return(
        <section className="relative bg-fixed bg-bottom bg-no-repeat bg-cover " style= {{backgroundImage:`url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`}} >
                 <div className="w-full px-4 mx-auto bg-black sm:px-6 bg-opacity-50">
                     <div className="pt-32 pb-12 md:pt-40 md:pb-20">
                         <div className="pb-12 text-center md:pb-16">
                             <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-white md:text-6xl leading-tighter"
                                 data-aos="zoom-y-out">Experience Exclusivity with  <span
                                 className="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-700 ">Tabletru!</span>
                             </h1>
                             <div className="max-w-3xl mx-auto">
                                 <p className="mb-8 text-xl text-white" data-aos="zoom-y-out" data-aos-delay="150">Elevate your dining experience with Tabletru. Book now for unforgettable culinary adventures at top restaurants! </p>
                                 <div className="flex max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-x-4"
                                      data-aos="zoom-y-out" data-aos-delay="300">
                                     <div>
                                     </div>
                                     <Search/>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>

        </section>
    );

}