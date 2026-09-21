export default function Contact(){
    return(
        <section className="contact">
            <h1>Get In Touch</h1>
            <p>Send me a message for queries and opportunities</p>
            <br />
            <p><strong>Mobile:</strong>+2547009xxxxx</p>
            <p><strong>Email:</strong>nabiru.dev@org.ke</p>
            <p><strong>Address:</strong>PO Box 345-00245, Riziki Plaza</p>
            <br />
            <form action="#" method="POST">
                <div>
                    <label htmlFor="name">Your Name</label> <br />
                    <input type="text" placeholder="Enter your name" />
                </div>

                <div>
                    <label htmlFor="email">Your Email</label><br />
                    <input type="text" placeholder="nabiru@example.gmail" />
                </div>
                <div>
                    <label htmlFor="message">Your Message</label><br />
                    <textarea name="message" id="message" rows="4" placeholder="Type your message here..."></textarea>
                </div>
                <br />
                <button type="submit">Send Message</button>
            </form>
        </section>
    );
}