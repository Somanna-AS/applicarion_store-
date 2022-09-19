import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
    function sendmail(e){
        e.preventDefault();

        emailjs.sendForm('service_cq8nije','template_oi2qo5d',e.target,'4QuCRTQpe73bhqcsU').then(res=>{
            console.log(res);

        }).catch(err=> console.log(err));
    }
    return (
        <div className="card-body" style={{ width: "80%", height: "600px" }}>
            <h1>CONTACT FORM</h1>

            <form class="mm" style={{ marginTop: "20px", width: "80%", margin: "150px auto", backgroundColor: "#bdc3c7", height: "500px" }} onSubmit={sendmail}>

                <br></br><br></br><label style={{ marginLeft: "30px" }}>NAME</label><br></br>
                <input type="text" name="name" style={{ width: "70%", marginLeft: "30px" }} class="mn" /><br></br>

                <label style={{ marginLeft: "30px" }}>E-MAIL</label><br></br>
                <input type="email" name="user_mail" style={{ width: "70%", marginLeft: "30px" }} class="mn" /><br></br>

                <label style={{ marginLeft: "30px" }}>MESSAGE</label><br></br>
                <textarea name="message" rows="4" style={{ width: "70%" }} class="mn" /><br></br>

                <input type="submit" value="send" className="btn"></input><br></br>

            </form>
        </div>
    )
};


export default Contact;