import React from 'react'
import { MultiImageInput } from "react-multi-image-input";
// import MultiImageInput from 'react-multi-image-input';
import { CompactPicker } from 'react-color'
import { Col, Container, Row } from 'react-bootstrap'
import AddProductHook from '../../Hook/Products/Add-Product-Hook';


const addProduct = () => {
    const [name, description, images, setImages, brand, price, colors, cartid, categoryid, onChangeName,
      onChangeDescription, onChangeimages, onChangeBrand, onChangeColor,
      onChangePrice, onChangeCartId, onChangeCategoryId, handelChangeComplete, removeColor, showColor, onChangeSubmit
  ] = AddProductHook();
  return (
    <Container  style={{minHeight: "680px"}}>
      <Row className=' py-5 d-flex justify-content-center'>
        <Col sm="12" className='d-flex flex-column'>
        <label className=' mx-auto'>اضافة منتج جديد</label>
            
            {/* <input
              value={images}
              onChange={onChangeimages}
              placeholder=' اسم المنتج'
              type='img'
              className='addproduct-input mt-3 text-center mx-auto'
            /> */}

                    <MultiImageInput
                        images={images}
                        setImages={setImages}
                        theme={"light"}
                        allowCrop={false}
                        max={3}
                    />
            
            <input
              value={name}
              onChange={onChangeName}
              placeholder='الاسم الاول'
              type='text'
              className='addproduct-input mt-3 text-center mx-auto'
            />
            <textarea
              value={description}
              onChange={onChangeDescription}
              placeholder='الاسم الاول'
              type='text'
              className='addproduct-input mt-3 text-center mx-auto'
            />
            <input
              value={brand}
              onChange={onChangeBrand}
              placeholder='الاسم الاول'
              type='text'
              className='addproduct-input mt-3 text-center mx-auto'
            />
            <input
              value={price}
              onChange={onChangePrice}
              placeholder='الاسم الاول'
              type='number'
              className='addproduct-input mt-3 text-center mx-auto'
            />
            {/* <input
              value={cartid}
              onChange={onChangeCartId}
              placeholder='الاسم الاول'
              type='text'
              className='addproduct-input mt-3 text-center mx-auto'
            /> */}
            <input
              value={categoryid}
              onChange={onChangeCategoryId}
              placeholder='الاسم الاول'
              type='number'
              className='addproduct-input mt-3 text-center mx-auto'
            />
             <input
              value={cartid}
              onChange={onChangeCartId}
              placeholder='الاسم الاول'
              type='number'
              className='addproduct-input mt-3 text-center mx-auto'
            />
             <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
                    <div className="mt-1 d-flex">
                        {
                            colors.length >= 1 ? (
                                colors.map((color, index) => {
                                    return (
                                        <div key={index}
                                            onClick={() => removeColor(color)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: color, borderRadius: '9px' , width: '20px', height: '20px', cursor: 'pointer' }}
                                            ></div>
                                    )
                                })

                            ) : null
                        }

                        <img onClick={onChangeColor} alt="Pick a color" width="30px" height="35px" style={{ cursor: 'pointer' }} />
                        {
                            showColor === true ? <CompactPicker onChangeComplete={handelChangeComplete} /> : null
                        }

                    </div>
        </Col>
        </Row>
        <Row>
                <Col sm="8" className="d-flex justify-content-end ">
                    <button onChange={onChangeSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
                </Col>
            </Row>
    </Container>
  )
}

export default addProduct
