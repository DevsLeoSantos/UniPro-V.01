import React from 'react'

import { Toast, ToastHeader, ToastBody } from 'reactstrap';

const Alert = () => {
    return (
        <div>
            <div className="Alert p-3 my-2 rounded">
                <Toast>
                    <ToastHeader>
                        Reactstrap
                    </ToastHeader>
                    <ToastBody>
                        This is a toast on a white background — check it out!
                    </ToastBody>
                </Toast>
            </div>
        </div>
    )
}

export default Alert