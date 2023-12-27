export default function BackgroundCard (){
    return(
        <section className="relative bg-fixed bg-bottom bg-no-repeat bg-cover " style= {{backgroundImage:`url('https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`}} >
             <div className="pb-12 text-center md:pb-16">
                <h1 className="mb-4 text-5xl font-extrabold tracking-tighter text-white md:text-6xl leading-tighter" data-aos="zoom-y-out"></h1>
          </div>
        </section>
    );

}