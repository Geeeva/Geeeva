import React from 'react';

const Modal = (props) => {
    return (
        <React.Fragment>
            <div class="md-modal md-effect-1" id="modal-1" style={{ visibility: props.show ? 'visible' : 'hidden'}}>
                <div className="md-content" style={{ opacity: props.show ? '1' : '0', transform: props.show ? 'scale(1)' : ''}}>
                    <h3>{props.data[1]}</h3>
                    <div>
                        <div>{props.data[2]}</div>
                        <button 
                            className="md-close" 
                            onClose={props.closeCallback}>
                            Close
                        </button>
                    </div>
                </div>
            </div>
            <div class="md-overlay" style={{ opacity: props.show ? '1' : '0', visibility: props.show ? 'visible' : 'hidden' }}></div>
        </React.Fragment>
    )
}

export default Modal;