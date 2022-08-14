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
                        Vyazemskiy pereulok, dom. 5/7<br/>
                        We are on whatsapp/telegram: +79111466599
                </div>
            </div>
        </div>
    )
}

export default Footer