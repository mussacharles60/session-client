import React from 'react';
import './index.css';

// const remote = window.require('electron').remote;


export default class  WindowFrame extends React.Component<{
// history: any;
}, {
  maximize_btn_d: string,
  restore_btn_d: string,
}> {
  private didMount: boolean = false;
  // private win = remote.getCurrentWindow();

  constructor(props: any) {
    super(props);

    this.didMount = false;

    this.state = {
      maximize_btn_d: 'block',
      restore_btn_d: 'none',
    }

    // this.handleWindowControls = this.handleWindowControls.bind(this);
    // this.toggleMaxRestoreBtns = this.toggleMaxRestoreBtns.bind(this);
  }

  componentDidMount() {
    this.didMount = true;

    const theme: string | null = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    if (theme) document.documentElement.className = theme;

  }

  componentWillUnmount() {
    this.didMount = false;
  }

  // onMinimizeClick () {
  //   this.win.minimize();
  // }

  // onMaximizeClick() {
  //   this.win.maximize();
  // }

  // onRestoreClick() {
  //   this.win.unmaximize();
  // }

  // onCLoseClick() {
  //   this.win.close();
  // }

  // handleWindowControls() {        
  //   try {
  //     this.toggleMaxRestoreBtns();
  //     this.win.on('maximize', () => this.toggleMaxRestoreBtns());
  //     this.win.on('unmaximize', () => this.toggleMaxRestoreBtns());
  //   } catch (e) { 
  //     console.log(e);
  //   }
  // }

  // toggleMaxRestoreBtns() {
  //   // console.log('toggle window called');
  //   if (!this.didMount) return;
  //   if (this.win.isMaximized()) {
  //     // console.log('toggle window called: - maximized');
  //     this.setState({
  //       restore_btn_d: 'block',
  //       maximize_btn_d: 'none',
  //     });
  //   } else {
  //     // console.log('toggle window called: - minimized');
  //     this.setState({
  //       restore_btn_d: 'none',
  //       maximize_btn_d: 'block',
  //     });
  //   }
  // }

  render() {

    return (
      <div className="top-bar">
            {/* <div className="resizable-top"></div> */}
            {/* <div className="resizable-left"></div> */}
            {/* <div className="resizable-right"></div> */}
            {/* <img className="logo-img selector-none" src="./images/logo-sm.png" /> */}
            {/* <h3 className="selector-none">Smart Hydroponic System</h3> */}
            {/* <div className="window-controls">
                <div aria-label="minimize" 
                title="Minimize" 
                tabIndex={-1} 
                // id="window-minimize" 
                className="window-control window-minimize"
                onClick={(e) => {
                  e.preventDefault();
                  this.onMinimizeClick();
                }}>
                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                        <path fill="var(--color-icon)" d="M 0,5 10,5 10,6 0,6 Z"></path>
                    </svg>
                </div>
                <div aria-label="maximize" 
                title="Maximize" 
                tabIndex={-1} 
                // id="window-maximize" 
                className="window-control window-maximize"
                style={{display: this.state.maximize_btn_d}}
                onClick={(e) => {
                  e.preventDefault();
                  this.onMaximizeClick();
                }}>
                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                        <path fill="var(--color-icon)" d="M 0,0 0,10 10,10 10,0 Z M 1,1 9,1 9,9 1,9 Z"></path>
                    </svg>
                </div>
                <div aria-label="restore" 
                title="Restore" 
                tabIndex={-1} 
                // id="window-restore" 
                className="window-control window-restore"
                style={{display: this.state.restore_btn_d}}
                onClick={(e) => {
                  e.preventDefault();
                  this.onRestoreClick();
                }}>
                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                        <path fill="var(--color-icon)" d="m 2,1e-5 0,2 -2,0 0,8 8,0 0,-2 2,0 0,-8 z m 1,1 6,0 0,6 -1,0 0,-5 -5,0 z m -2,2 6,0 0,6 -6,0 z"></path>
                   </svg>
                </div>
                <div aria-label="close" 
                title="Close" 
                tabIndex={-1} 
                // id="window-close" 
                className="window-control window-close"
                onClick={(e) => {
                  e.preventDefault();
                  this.onCLoseClick();
                }}>
                    <svg aria-hidden="true" version="1.1" width="10" height="10">
                        <path fill="var(--color-icon)" d="M 0,0 0,0.7 4.3,5 0,9.3 0,10 0.7,10 5,5.7 9.3,10 10,10 10,9.3 5.7,5 10,0.7 10,0 9.3,0 5,4.3 0.7,0 Z"></path>
                    </svg>
                </div>
            </div> */}
        </div>
    );
  }
}