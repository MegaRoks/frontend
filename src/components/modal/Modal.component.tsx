import React, { Fragment, useEffect, useRef } from 'react';

import './Modal.style.scss';
import { IModalProps } from './Modal.interface';
import { LoaderComponent } from '../loader/Loader.component';
import { connector } from './Modal.service';

export const ModalComponent = connector(({ children, showLoader, hiddenLoader, isLoader }: IModalProps) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const options: Partial<M.ModalOptions> = {
            onOpenStart: () => {
                console.log('Open Start');

                showLoader();
            },
            onOpenEnd: () => {
                console.log('Open End');

                hiddenLoader();
            },
            onCloseStart: () => {
                console.log('Close Start');
            },
            onCloseEnd: () => {
                console.log('Close End');
            },
            inDuration: 250,
            outDuration: 250,
            opacity: 0.5,
            dismissible: false,
            startingTop: '4%',
            endingTop: '10%',
        };

        modalRef.current && M.Modal.init(modalRef.current, options);
    }, [hiddenLoader, showLoader]);

    return (
        <Fragment>
            <div id="modal1" className="modal" ref={modalRef}>
                <div className="modal__content">
                    <div className="modal__header">
                        <button className="btn modal__button modal__button-close modal-close">
                            &times;
                        </button>
                    </div>

                    {isLoader ? <LoaderComponent /> : children}
                </div>
            </div>
        </Fragment>
    );
});
