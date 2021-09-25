import React from 'react';
import './index.css';

export default class Landing extends React.Component<{
  history: any;
},{

}> {
  private didMount: boolean = false;

  constructor(props: any) {
    super(props);

    this.didMount = false;

  }



  componentDidMount() {
    this.didMount = true;

    const theme: string | null = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
    if (theme) document.documentElement.className = theme;
  }

  componentWillUnmount() {
    this.didMount = false;
  }

  render() {
    return (
      <div className='landing-main'>
        <div className='left-side'>

        </div>
        <div className='center-side'>
          <div className="first-section">

          </div>
          <div className='second-section'>
            <span className='session-btn border-shadow'>
              Start Session
            </span>
          </div>
        </div>
        <div className='right-side'>

        </div>
      </div>
    );
  }
}