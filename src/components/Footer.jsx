import '../style/Footer.css'

function Footer(){

    return(
        <div className='display__column'>
            <div className='question'>
                <p>
                    Do you have any question?<br/>
                    We are on whatsapp/telegram: +79111466599
                </p>
            </div>
            <div className='hr'><hr/></div>
            <div className= 'flex-container footer-bottom'>
                <div className='copyright'>
                    2022 &copy; All right reserved.
                </div>
                <div className='message'>
                    From <span className="heart">&#10084;</span><br/>by ziBraid
                </div>
                <div className='contact'>
                    <a href="#" className="fa fa-whatsapp"></a>
                    <a href="https://github.com/sabahoth01" className="fa fa-github"></a>
                </div>
            </div>
        </div>
    )
}

export default Footer