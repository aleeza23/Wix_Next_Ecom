'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/hooks/useCartStore';
import { media as wixMedia } from '@wix/sdk';
import Image from 'next/image';
import emailjs from 'emailjs-com'; // Import EmailJS
import Footer from '@/components/Footer';
import { useWixClient } from '@/hooks/useWixClient';

const CheckoutPage = () => {
    const router = useRouter();
    const { setIsCartOpen } = useWixClient();
    const { cart } = useCartStore();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
    });

    const [error, setError] = useState('');

    useEffect(() => {
        setIsCartOpen(false);
    }, [setIsCartOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.address || !formData.city) {
            setError('Please fill in all required fields.');
            return;
        }

        // Clear error message if validation passes
        setError('');

        // Create the items array for the email template
        const items = cart.lineItems.map(item => {
            // Extract color and RAM from descriptionLines
            const color = item.descriptionLines.find(elm => elm.colorInfo)?.colorInfo?.original || 'N/A'; // Default to 'N/A' if no colorInfo
            const ram = item.descriptionLines.find(elm => elm.name?.original.toLowerCase().includes('ram'))?.plainText?.original || 'N/A'; // Default to 'N/A' if no RAM info

            return {
                productName: item.productName.original,
                price: item.price.formattedAmount,
                quantity: item.quantity,
                totalPrice: `₨${(item.price.amount * item.quantity).toLocaleString()}`, // Calculate total price for this item
                color: color, // Add color to the item
                ram: ram // Add RAM to the item
            };
        });

        const orderDetails = {
            from_name: `${formData.firstName} ${formData.lastName}`, // Sender's name
            from_email: formData.email,
            reply_to: formData.email,
            phone: formData.phone,
            total: `₨${calculateTotal().toLocaleString()}`, // Total amount
            items: items // Ensure this is structured correctly for the template
        };

        console.log(orderDetails, 'details');

        try {
            // Initialize EmailJS with your public key (if needed)
            emailjs.init('vzqjOttanPtAGVXWB'); // Initialize with your actual public key

            // Send email using EmailJS
            const response = await emailjs.send('service_kzajx5h', 'template_z732c03', orderDetails, 'vzqjOttanPtAGVXWB');
            console.log('Email successfully sent!', response.text);

            // Redirect to success page
            router.push('/success');
        } catch (error) {
            console.error('Error sending email:', error);
        }
    };

    const handleCancel = () => {
        router.push('/');
    };

    // Function to calculate total price
    const calculateTotal = () => {
        return cart.lineItems?.reduce((total, item) => total + parseInt(item.price.amount) * item.quantity, 0);
    };

    return (
        <>
            <div className="font-[sans-serif] bg-white container mx-auto">
                <div className="flex max-sm:flex-col gap-12 max-lg:gap-4 h-full mx-auto">
                    <div className="shadow-lg mx-auto text-black sm:h-screen sm:sticky sm:top-0 lg:min-w-[370px] sm:min-w-[300px]">
                        <div className="relative h-full">
                            <div className="py-8 sm:overflow-auto sm:h-[calc(100vh-60px)]">
                                <div className="space-y-4">
                                    {cart.lineItems?.map((item, index) => (
                                        <div key={index} className="flex items-start gap-4 px-8">
                                            <div className="w-32 relative h-28 max-lg:w-24 max-lg:h-24 flex p-3 shrink-0 rounded-md">
                                                <Image fill src={wixMedia.getScaledToFillImageUrl(item.image, 200, 200, {})} className="w-full object-contain" alt={item.productName.original} />
                                            </div>
                                            <div className="w-full">
                                                <h3 className="text-base text-black">{item.productName.original}</h3>
                                                <ul className="text-xs text-black space-y-2 mt-2">
                                                    {item?.descriptionLines.map((elm, i) => (
                                                        <li key={i} className="flex flex-wrap gap-4">
                                                            {elm?.name?.original} <span className="ml-auto">{elm?.colorInfo ? elm?.colorInfo?.original : elm?.plainText?.original}</span>
                                                        </li>
                                                    ))}
                                                    <li className="flex flex-wrap gap-4">Quantity <span className="ml-auto">{item.quantity}</span></li>
                                                    <li className="flex flex-wrap gap-4">Total Price <span className="ml-auto">{item.price.formattedAmount}</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}

                                    <h4 className="flex flex-wrap mt-auto gap-4 px-4 py-4 bg-blue-600 text-base text-white">
                                        Total <span className="ml-auto">{cart.lineItems?.length > 0 ? `₨${calculateTotal().toLocaleString()}` : '₨0.00'}</span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="max-w-4xl w-full me-auto h-max rounded-md px-4 py-8 sticky top-0">
                        <h2 className="text-2xl font-bold text-gray-800">Complete your order</h2>
                        <form className="mt-8" noValidate onSubmit={handleSubmit}>
                            <div>
                                <h3 className="text-base text-gray-800 mb-4">Personal Details</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="First Name" name="firstName" value={formData.firstName} onChange={handleChange} required
                                            className="focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 px-4 py-3 peer bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="Last Name" name="lastName" value={formData.lastName} onChange={handleChange} required
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                    <div>
                                        <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                    <div>
                                        <input type="number" placeholder="Phone No." name="phone" value={formData.phone} onChange={handleChange} required
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8">
                                <h3 className="text-base text-gray-800 mb-4">Shipping Address</h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <input type="text" placeholder="Address" name="address" value={formData.address} onChange={handleChange} required
                                            className="focus:ring-2 [.validated_&]:invalid:border-pink-600 [.validated_&]:invalid:ring-2 [.validated_&]:invalid:ring-pink-200 px-4 py-3 peer bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                    <div>
                                        <input type="text" placeholder="City" name="city" value={formData.city} onChange={handleChange} required
                                            className="px-4 py-3 bg-gray-100 focus:bg-transparent text-gray-800 w-full text-sm rounded-md focus:outline-blue-600" />
                                    </div>
                                </div>
                                {error && <p className="text-red-600 mt-3 ms-2">{error}</p>}

                            </div>

                            <div className="mt-8 flex gap-4 justify-between">
                                <button type="button" onClick={handleCancel} className="w-full rounded-md border   py-3 px-4 text-base font-medium text-blue-600 focus:outline-none">Cancel</button>
                                <button type="submit" className="w-full rounded-md border border-transparent bg-blue-600 py-3 px-4 text-base font-medium text-white shadow-sm focus:outline-none">Place Order</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default CheckoutPage;
