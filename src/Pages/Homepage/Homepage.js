import React from 'react';
import { Konten } from '../../Assets/Components/Konten/Konten';
import car from '../../Assets/Img/img_car.png';
import "../Homepage/Homepage.css";

export const Homepage = () => {
  
  return (
    <div className='bghalaman'>
        <div className="row bgcolor justify-content-center align-items-center">
          <div className="col-lg-6 text-item">
            <h3>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h3>
            <p>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <button type="button" className="btn btn-success">Mulai Sewa Mobil</button>
          </div>
          <div className="col-lg-6">
            <div className="bgcontainer"><img src={car} className="img_car" alt=""/></div>
          </div>
			</div>
      
      
      <Konten />
      
    </div>
    

  )
}

