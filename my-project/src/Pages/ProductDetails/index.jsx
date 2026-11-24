import React, { useState } from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Link } from 'react-router-dom';
import ProductZoom from '../../components/ProductZoom';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import ProductsSlider from '../../components/ProductSlider'
import ProductDetailsComponent from '../../components/ProductDetails';

const ProductDetails = () => {

    const [activeTab, setActiveTab] = useState(0);

  return (
    <>
    <div className='py-5'>
        <div className="container">
            <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover"  href="/" className='link transition !text-[#c5a059] hover:!text-[#ff5252]'>
          Home
        </Link>
        <Link
          underline="hover"
         
          href="/"
          className='link transition !text-[#c5a059] hover:!text-[#ff5252]'
        >
          Fashion
        </Link>
        <Link
          underline="hover"
         
          href="/"
          className='link transition !text-[#c5a059] hover:!text-[#ff5252]'
        >
          Velflex Fragrance Flip-o-coller
        </Link>
            </Breadcrumbs>
        </div>

    </div>

    <section className='bg-black py-5'>
        <div className="container flex gap-8 items-center">
            <div className="productZoomContainer w-[40%]">
                <ProductZoom/>
            </div>

            <div className="productContent w-[60%] pr-5 pl-5">
               <ProductDetailsComponent/>
            </div>
        </div>

        <div className="container pt-10">
            <div className="flex items-center gap-8 mb-5">
                <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===0 ? 'text-[#ff5252]' : 'text-[#917108]'}`} onClick={()=>setActiveTab(0)}>Description</span>
                <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===1 ? 'text-[#ff5252]' : 'text-[#917108]'}`} onClick={()=>setActiveTab(1)}>Product Details</span>
                <span className={`link text-[17px] cursor-pointer font-[500] ${activeTab===2 ? 'text-[#ff5252]' : 'text-[#917108]'}`} onClick={()=>setActiveTab(2)}>Review (5)</span>
            </div>

            {
                activeTab===0 && (
                    <div className="shadow-md w-full py-5 px-8 bg-[#121212] rounded-md">
                <p className='text-[#c5a059]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut, ipsa reiciendis ipsam exercitationem perferendis eius est tempore vitae odit porro optio debitis a temporibus quos labore fugit eum alias reprehenderit!</p>

                <h4 className='text-[#917108]'>Loghtwaight Design</h4>

                <p className='text-[#c5a059]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda facere consequatur, quaerat quidem laboriosam doloremque voluptatem suscipit praesentium sunt earum molestiae nulla eos tempore, accusantium quo deleniti. Fugit, minus soluta?</p>

                <h4 className='text-[#917108]'>Free Shipping & Return</h4>

                <p className='text-[#c5a059]'>We offer free sheeping for products on orders above 2000/-RS and ofter free delivery for all order in US.</p>

                <h4 className='text-[#917108]'>Money Back Guarantee</h4>

                <p className='text-[#c5a059]'>We guarantee our products and you could get back all of your money anytime you want in 30 days.</p>

                <h4 className='text-[#917108]'>Online Support</h4>

                <p className='text-[#c5a059]'>You will get 24 hour suppport with this purchase product and you can return it within 30 days(for internationl), 3 days(for india- days count after delivery day) for an exchange</p>
            </div>
                )
            }

            {
                activeTab===1 && (
<div className="shadow-md w-full py-5 px-8 bg-[#121212] rounded-md">
<div class="relative overflow-x-auto bg-[#121212] shadow-xs rounded-base border border-default border-black">
    <table class="w-full text-sm text-left rtl:text-right text-body">
        <thead class="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default border-black">
            <tr>
                <th scope="col" class="px-6 py-3 font-[600] text-[16px] text-[#917108]">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[16px] text-[#917108]">
                    Color
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[16px] text-[#917108]">
                    Category
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[16px] text-[#917108]">
                    Price
                </th>
                <th scope="col" class="px-6 py-3 font-[600] text-[16px] text-[#917108]">
                    Stock
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
            <tr class="bg-neutral-primary border-b border-default border-black">
                <th scope="row" class="px-6 py-4 font-medium text-heading whitespace-nowrap text-[#917108]">
                    Velflex flip-o-coller
                </th>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Black glass
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    Men Fragrance
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    1999/-RS
                </td>
                <td class="px-6 py-4 text-[500] text-[#c5a059]">
                    348
                </td>
            </tr>
        </tbody>
    </table>
</div>
</div>
                )
            }

            {
                activeTab===2 && (
                    <div className="shadow-md w-[80%] py-5 px-8 bg-[#121212] rounded-md">
                        <div className="w-full productReviewContainer">
                            <h2 className='text-[#917108] text-[18px]'>Customer Genuine Review</h2>

                            <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                                <div className="review pt-5 pb-5 border-b border-black w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lbHPnYJmvtt-MAOvfkfTOdavRHEbyNBgwESMFFFpQm0-Ys1Tgk8dF52Y&s=10" alt="" className='w-full'/>
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[16px] text-[#917108]'>tanuu verma</h4>
                                            <h5 className='text-[13px] text-[#c5a059] mb-0 opacity-45'>2026-12-30</h5>
                                            <p className='text-[#c5a059] mt-0 mb-0 opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius error quisquam ratione voluptates delectus quam qui quibusdam! Exercitationem repellat inventore ullam ducimus non fugiat, id iste itaque laboriosam aliquam nam!</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
                                </div>
                                <div className="review pt-5 pb-5 border-b border-black w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lbHPnYJmvtt-MAOvfkfTOdavRHEbyNBgwESMFFFpQm0-Ys1Tgk8dF52Y&s=10" alt="" className='w-full'/>
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[16px] text-[#917108]'>tanuu verma</h4>
                                            <h5 className='text-[13px] text-[#c5a059] mb-0 opacity-45'>2026-12-30</h5>
                                            <p className='text-[#c5a059] mt-0 mb-0 opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius error quisquam ratione voluptates delectus quam qui quibusdam! Exercitationem repellat inventore ullam ducimus non fugiat, id iste itaque laboriosam aliquam nam!</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
                                </div>
                                <div className="review pt-5 pb-5 border-b border-black w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lbHPnYJmvtt-MAOvfkfTOdavRHEbyNBgwESMFFFpQm0-Ys1Tgk8dF52Y&s=10" alt="" className='w-full'/>
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[16px] text-[#917108]'>tanuu verma</h4>
                                            <h5 className='text-[13px] text-[#c5a059] mb-0 opacity-45'>2026-12-30</h5>
                                            <p className='text-[#c5a059] mt-0 mb-0 opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius error quisquam ratione voluptates delectus quam qui quibusdam! Exercitationem repellat inventore ullam ducimus non fugiat, id iste itaque laboriosam aliquam nam!</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
                                </div>
                                <div className="review pt-5 pb-5 border-b border-black w-full flex items-center justify-between">
                                    <div className="info w-[60%] flex items-center gap-3">
                                        <div className="img w-[80px] h-[80px] overflow-hidden rounded-full mt-4">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0lbHPnYJmvtt-MAOvfkfTOdavRHEbyNBgwESMFFFpQm0-Ys1Tgk8dF52Y&s=10" alt="" className='w-full'/>
                                        </div>

                                        <div className='w-[80%]'>
                                            <h4 className='text-[16px] text-[#917108]'>tanuu verma</h4>
                                            <h5 className='text-[13px] text-[#c5a059] mb-0 opacity-45'>2026-12-30</h5>
                                            <p className='text-[#c5a059] mt-0 mb-0 opacity-80'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius error quisquam ratione voluptates delectus quam qui quibusdam! Exercitationem repellat inventore ullam ducimus non fugiat, id iste itaque laboriosam aliquam nam!</p>
                                        </div>
                                    </div>
                                    <Rating name="size-small" defaultValue={4} readOnly sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>
                                </div>                           
                                
                            </div>

                            <br />

                            <div className="reviewForm rounded-md">
                                <h2 className='text-[18px] text-[#917108] bg-black p-4 rounded-md'>Add a review</h2>
                                <form className='w-full mt-5 p-4'> 
                                    <TextField
                                      id="outlined-multiline-flexible"
                                      label="Writte a review.."
                                      className='w-full mb-5'
                                      multiline
                                      rows={5}
                                    />

                                    <br /><br />

                                    <Rating name="size-small" defaultValue={4} sx={{'& .MuiRating-iconEmpty .MuiSvgIcon-root':{color: '#c5a059'}}}/>

                                    <div className="flex items-center mt-5">
                                        <Button className='btn-org'>Submit Review</Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                )
            }

        </div>

        <div className="container pt-5">
            <h2 className='text-[20px] font-[600] text-[#917108] pb-0'>Related Products</h2>
            <ProductsSlider items={6}/>
        </div>
    </section>
    </>
  )
}

export default ProductDetails;