import React from 'react';
import ImageGallery from './ImageGallery';
import './ImageGallery.scss';

export default function Testimonials() {
  return (
    <>
      <section>
        {/* <div>
          <p className='testimonials'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
            libero odio dolores cum corrupti eos. Reprehenderit, laboriosam!
            Sint aut quae, expedita facilis ab vel
          </p>
        </div> */}
        <h3>Ryan</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          odio dolores cum corrupti eos. Reprehenderit, laboriosam! Sint aut
          quae, expedita facilis ab vel iusto culpa voluptate quas consequatur
          maiores, dolorum similique in sit numquam vero ipsam est dolorem.
          Molestiae dicta est ab? Reprehenderit ullam reiciendis dolore
          laboriosam cum, mollitia.
        </p>

        <h3>Sophia</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          odio dolores cum corrupti eos. Reprehenderit, laboriosam! Sint aut
          quae, expedita facilis ab vel iusto culpa voluptate quas consequatur
          maiores, dolorum similique in sit numquam vero ipsam est dolorem.
          Molestiae dicta est ab? Reprehenderit ullam reiciendis dolore
          laboriosam cum, mollitia.
        </p>

        <h3>Yoda</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit libero
          odio dolores cum corrupti eos. Reprehenderit, laboriosam! Sint aut
          quae, expedita facilis ab vel iusto culpa voluptate quas consequatur
          maiores, dolorum similique in sit numquam vero ipsam est dolorem.
          Molestiae dicta est ab? Reprehenderit ullam reiciendis dolore
          laboriosam cum, mollitia.
        </p>
      </section>
      <ImageGallery />
    </>
  );
}
