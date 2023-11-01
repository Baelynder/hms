import React, {useState} from 'react'

const AddRoom = () => {
  const [images, setImages] = useState([]);
  const [imagesPreview, setImagesPreview] = useState([]);

  const handleImageChange = (e) => {
    const selectedImages = Array.from(e.target.files);

    setImages(selectedImages);

    // Display image previews
    const imagePreviews = selectedImages.map((image, index) => (
      <img
        key={index}
        src={URL.createObjectURL(image)}
        alt="Preview"
        style={{ maxWidth: '150px',border:'none',borderRadius:5  }}
      />
    ));

    setImagesPreview(imagePreviews);
  };




  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title" id="exampleModalLabel">Add room</p>
          <button type="button" className="btn-close btn-secondary" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3 item">
              <small htmlFor="recipient-name" className="col-form-label">Room Number</small>
              <input type="text" name="" id="" />
            </div>
            <div className="mb-3 item">
              <small htmlFor="message-text" className="col-form-label">Capacity</small>
              <input type="number" name="" id="" />
            </div>
            <div className="mb-3 item">
              <small htmlFor="message-text" className="col-form-label">Price (UGX)</small>
              <input type="number" name="" id="" />
            </div>
            <div className="mb-3">
              <p className="my-2 opacity-50">Select images of the room</p> 
            <input
        type="file"
        id="imageInput"
        accept="image/*"
        multiple
        onChange={handleImageChange}
      />
      <br /><br />

      <div className="row" id="imagePreview">
        {imagesPreview}
      </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className='px-4 py-2 bg-dark rounded text-light' style={{border:'none'}} data-bs-dismiss="modal">Cancel</button>
          <button type="button" className='px-4 py-2 rounded' style={{border:'1px solid #333', background:'transparent'}}>Upload</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default AddRoom
