import React, { useEffect } from 'react';
import Image from 'next/image';
import { useCartStore } from '@/hooks/useCartStore';
import { media as wixMedia } from '@wix/sdk';
import { useWixClient } from '@/hooks/useWixClient';
import { useRouter } from 'next/navigation';
import { FaTimes } from 'react-icons/fa';

const CartModal = ({  isOpen, setIsOpen }) => {
    const { wixClient } = useWixClient();
    const { cart, isLoading, removeItem } = useCartStore();
    const router = useRouter();

    // Use effect to control body scroll
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = 'auto'; // Enable scrolling
        }

        // Clean up on unmount
        return () => {
            document.body.style.overflow = 'auto'; // Re-enable scrolling when component unmounts
        };
    }, [isOpen]);

    // Function to close the modal
    const handleClose = () => {
        setIsOpen(false);
    };

    return (
        <>
            {/* Backdrop */}
            {isOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-10 cursor-pointer" onClick={handleClose}></div>
            )}
            {/* Modal */}
            <div
                
                className={`fixed top-0 right-0 h-screen w-[100vw] sm:w-[50vw] md:w-[45vw] lg:w-[35vw] xl:w-[25vw] p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white z-20 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
                }`}
            >
                {/* Close Button */}
                <button
                    className="absolute bg-blue-600 rounded-full text-white top-3 right-3 p-1 "
                    onClick={handleClose}
                >
                    <FaTimes size={24} />
                </button>

                {cart.lineItems?.length === 0 ? (
                    <div className='flex justify-center items-center mt-20'>Cart is Empty</div>
                ) : (
                    <>
                        <h6 className="text-xl mt-10 font-bold">Shopping Cart</h6>
                        <hr className='mt-5' />
                        <div className="flex flex-col gap-8 mt-3">
                            {cart.lineItems?.map((item) => (
                                <div className="flex gap-4" key={item._id}>
                                    {item.image && (
                                        <Image
                                            src={wixMedia.getScaledToFillImageUrl(item.image, 72, 96, {})}
                                            alt=""
                                            width={72}
                                            height={96}
                                            className="object-cover rounded-md"
                                        />
                                    )}
                                    <div className="flex flex-col justify-between w-full">
                                        <div>
                                            <div className="flex items-center justify-between gap-8">
                                                <h3 className="font-semibold">{item.productName?.original}</h3>
                                                <div className="p-1 bg-gray-50 rounded-sm text-sm flex items-center gap-2">
                                                    {item.quantity && item.quantity > 1 && (
                                                        <div className="text-xs text-green-500">
                                                            {item.quantity} x{" "}
                                                        </div>
                                                    )}
                                                    Rs.{item.price?.amount}
                                                </div>
                                            </div>
                                            <div className="text-sm text-gray-500">{item.availability?.status}</div>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span className="text-gray-500">Qty. {item.quantity}</span>
                                            <span
                                                className="text-blue-500"
                                                style={{ cursor: isLoading ? "not-allowed" : "pointer" }}
                                                onClick={() => removeItem(wixClient, item._id)}
                                            >
                                                Remove
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div>
                            <div className="flex items-center mt-10 justify-between font-semibold">
                                <span>Subtotal</span>
                                <span>RS {cart.subtotal.amount}</span>
                            </div>
                            <p className="text-gray-500 text-sm mt-2 mb-4">
                                Shipping and taxes calculated at checkout.
                            </p>
                            <div className="flex justify-between text-sm">
                                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">
                                    View Cart
                                </button>
                                <button
                                    className="rounded-md py-3 px-4 bg-black text-white disabled:cursor-not-allowed disabled:opacity-75"
                                    disabled={isLoading}
                                    onClick={() => router.push("/checkout")}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    );
};

export default CartModal;
