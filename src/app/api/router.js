import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { firstName, lastName, email, phone, address, city, state, zip, items, total } = req.body;

        const transporter = nodemailer.createTransport({
            service: 'Gmail', // You can use any email service
            auth: {
                user: process.env.EMAIL_USER, // Your email address
                pass: process.env.EMAIL_PASS, // Your email password or app-specific password
            },
        });

        const mailOptions = {
            from: email, // Send from the user's email address
            to: process.env.RECEIVER_EMAIL, // Your email address
            subject: 'New Order Received',
            html: `
                <h1>New Order Received</h1>
                <p>Order from: ${firstName} ${lastName}</p>
                <h2>Order Details:</h2>
                <ul>
                    ${items.map(item => `
                        <li>
                            <strong>Product:</strong> ${item.productName.original}<br />
                            <strong>Quantity:</strong> ${item.quantity}<br />
                            <strong>Price:</strong> ${item.price.formattedAmount}<br />
                        </li>
                    `).join('')}
                </ul>
                <h3>Total: ₨${total.toLocaleString()}</h3>
                <h2>Shipping Address:</h2>
                <p>${address}, ${city}, ${state}, ${zip}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
            `,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ error: 'Error sending email' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
