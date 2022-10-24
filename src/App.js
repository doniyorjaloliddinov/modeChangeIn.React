import React, { Component } from 'react';

class App extends Component {
    state = {
        bgColor: true,
        textColor: true,
        darkLogo:true,
    }

    changeMode = () =>{
        this.setState({
            bgColor : !this.state.bgColor,
            textColor: !this.state.textColor,
            darkLogo:!this.state.darkLogo,
        })
    }

    render() {
        const { bgColor,textColor,darkLogo } = this.state;



        return (
            <div className={ bgColor ? 'site bg-dark' : 'site bg-light'}>
                <div className='container'>
                    <header className='site-header py-3 d-flex justify-content-between align-content-center'>
                        <div className='site-log-wrapper'>
                            <img className={darkLogo ? 'site-logo-light' : 'site-logo'} src='./img/site-logo.svg' width={120} height={35} />
                        </div>

                        <nav className='site-navbar'>
                            <ul className='nav-list list-unstyled d-flex justify-content-between'>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Home</li>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Whar we do</li>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Service</li>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Project</li>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Blog </li>
                                <li className={textColor ? 'text-light navbar-list__items mx-4 my-2 cursor-pointer ' : 'text-dark navbar-list__items mx-4 my-2 cursor-pointer '}>Contact</li>
                            </ul>
                        </nav>

                        <button className='btn mode-changer-btn bg-transparent '>
                            <img onClick={this.changeMode} src='./img/moon.png' className='mode-changer-img' width={30} height={25} />
                        </button>
                    </header>

                    <section className='hero-content-wrapper d-flex align-items-center justify-content-between'>
                        <div className='hero-info-wrapper'>
                            <h2 className={textColor ? 'hero-heading  text-light ' : 'text-dark'}>A Digital Product Agency</h2>
                            <p className={textColor ? 'hero-text  text-light ' : 'text-dark'}>
                                Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.
                            </p>
                            <button className='hero-btn btn-primary'>Contact Now</button>
                        </div>

                        <img src='./img/hero-bgimg.png' width={400} height={300} />
                    </section>
                </div>
            </div>
        );
    }
}

export default App;



//                                         {
//                                             showBody ? <div onClick={this.showBody} className="hide">Hide</div> :
//                                                 <div onClick={this.showBody} className="show">Show</div>
//                                         }



