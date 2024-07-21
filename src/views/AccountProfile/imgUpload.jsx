import React, { useState } from 'react';
import './imgUpload.css';
// import { Lightbox } from 'react-modal-image';

const ImgUpload = () => {
   const [open, setOpen] = useState(false);
   let imageFile = '';

   // const closeLightbox = () => {
   //   setOpen(() => false);
   // };
   /*************************************************
    * BASE 64 CONSTANT IMAGE*
    *************************************************/
   const imagePreview =
      'iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEX09PTMzMzJycnPz8/d3d3V1dXi4uLo6Ojw8PDx8fH39/ft7e3Y2NjQ0NDp6enb29uHE20LAAACaklEQVR4nO3b6W6CQBhGYUTWD9T7v9uylLIN6jCk8Cbn+deEGo6DMOAYRQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJyFiuzshLesStJAdVZdufEV38LFydkZm6w+IrBJrK86itkxgU1ifnaKmz363QvUvsbjmoNYdjuXPPMQz6R7lfLsGKeq3bd76LvfHwnFIXt0tOKYwjuF51kVtjMUbzqFVmR1/cpK30idwv7qH98yz0SVwvI+XP19JygqhY9xehMnXokihfl0/hZ77a5I4WM2zXz5DKJI4XwKvjHLNGeGRmE1L7w7N7fKeRLSKCy+KGwCnedZjcJofruXuo7SbpwdiRqFlk4D42y9rf0eyOtEjcL5BzFeb2rV5oRApNAmj6QcjyRs8g4sE0UKJ4nxemJq8yGeJ6oURpY/uic26frppy0uJvNEmcI2JM/yovlz8cxlGbhIFCrcsA6cX0/kC52Bt3hMlC90Bk5HUbzQPYL9KA6b6BXmk8/YZuCYqFdYj/f47wL/EtUKrR6/LXsfOCSKFbaBQ+KnwGa79sqpVWjp7x1Ec6B+DhQsHAK7xM+BeoVjYLPzr499eoXTwO+IFfoHihXuWbWgVVh792kV7lt3IlRoe0ZQqvCLax+FZ8c4UUghheebFu6jU1gk++gU7l3t3f2rRmGAyxcGr329cuEh60stunBh2Z3y6yxM/wX52S1u/bf3Ryzzdq9tuIDnYWv1q7NTNlhy0O8t/Nb6/SfLbnHoYbpjSep/sjLfOZ0ZXfTXJKPgH69deAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDyA0uAKIxQw0bjAAAAAElFTkSuQmCC';

   /*************************************************
    * IMAGE HANDLE FUNCTION *
    *************************************************/
   function handleImageUpload(event) {
      let file = event.target.files[0];
      getBase64(file).then((result) => {
         file['base64'] = result;
         handleFieldChange(fieldName, result);
         setFieldValue(fieldName, file);
      });
   }

   const getBase64 = (file) => {
      return new Promise((resolve) => {
         let baseURL = '';

         let reader = new FileReader();

         reader.readAsDataURL(file);

         reader.onload = () => {
            baseURL = reader.result.replace('data:', '').replace(/^.+,/, '');

            resolve(baseURL);
         };
      });
   };

   /*************************************************
    * IMAGE PREVIEW BOX  *
    *************************************************/
   const UploadImageShow = () => (
      <button type="button" onClick={() => setOpen(true)} style={{ border: 'none', padding: 0, background: 'none' }}>
         <img
            src={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
            alt="User Profile"
            style={{ width: '100%', cursor: 'pointer' }}
         />
      </button>
   );

   return (
      <div className="wrapper">
         <div className="box">
            <div className="js--image-preview">
               <UploadImageShow data={imageFile} />
            </div>
            {open && (
               <div
                  role="button"
                  tabIndex={0}
                  onClick={() => setOpen(false)}
                  onKeyPress={(e) => {
                     if (e.key === 'Enter' || e.key === ' ') {
                        setOpen(false);
                     }
                  }}
               >
                  <dialog style={{ boxShadow: '0 8px 6px -6px black', position: 'absolute', left: '-75%', top: '5%', zIndex: '10' }} open>
                     <img
                        src={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
                        alt="User Profile"
                        style={{ width: '600px', height: '420px', cursor: 'pointer' }}
                     />
                  </dialog>
               </div>

               // <Lightbox
               //   onClose={closeLightbox}
               //   small={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
               //   medium={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
               //   large={imageFile ? `data:image/jpeg;base64,${imageFile}` : `data:image/jpeg;base64,${imagePreview}`}
               // ></Lightbox>
            )}
            <div className="upload-options">
               <label>
                  <input
                     type="file"
                     className="image-upload"
                     name="PersonalImageFile"
                     accept="image/*"
                     onChange={(e) => handleImageUpload(e)}
                  />
               </label>
            </div>
            <div></div>
         </div>
      </div>
   );
};

export default ImgUpload;
