import "./mail.css";

const MailList=()=>{
    return(
        <div className="mail">
            <h1 className="mailtitle">Save Time,save money</h1>
            <span className="mailDesc">Sign up and we will</span>
            <div className="mailInputContainer">
                <input type="text" placeholder="Your Email"/>
                <button>Subscribe</button>
            </div>
            <h1 className="copyright">Copyright @ 2024</h1>

        </div>
    )
}
export default MailList;