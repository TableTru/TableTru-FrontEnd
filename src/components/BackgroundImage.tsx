export default function BackgroundCard (){
    return(
        <section className="relative bg-fixed bg-bottom bg-no-repeat bg-cover " style= {{backgroundImage:`url('/images/Promo_code.png')`}} >
                 <div class="w-full px-4 mx-auto bg-black sm:px-6 bg-opacity-30">


                     <div class="pt-32 pb-12 md:pt-40 md:pb-20">

                         <div class="pb-12 text-center md:pb-16">
                             <h1 class="mb-4 text-5xl font-extrabold tracking-tighter text-white md:text-6xl leading-tighter"
                                 data-aos="zoom-y-out">Explore Our Exclusive <span
                                 class="text-transparent bg-clip-text bg-gradient-to-r from-red-200 to-red-900 "> Promotions!</span>
                             </h1>
                             <div class="max-w-3xl mx-auto">
                                 <p class="mb-8 text-xl text-white" data-aos="zoom-y-out" data-aos-delay="150">Enter a
                                     world of exclusive deals and wonderful savings. Don't skip on your chance to save
                                     lots of money and improve your online buying with us!"</p>
                                 <div class="flex max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center gap-x-4"
                                      data-aos="zoom-y-out" data-aos-delay="300">
                                     <div>
                                         <x-button>
                                             <a href="{{ route('all-promotion') }}" className="text-white">
                                                 See more
                                             </a>
                                         </x-button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                     </div>

                 </div>

        </section>
    );

}