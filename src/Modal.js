export const Modal = ({ show, onClose, value }) => {
    if (!show) { 
        return null
    }
    return (
        <div className="modal">
            <div className="modal__container">
                <div className="modal__content">
                    <div className="modal__close">
                        <div onClick={onClose} className="modal__button"><img  src={require('./icon/cross.svg').default} /></div>
                    </div>
                    <pre className="modal__info"><p>{value}</p></pre>
                    <div className="modal__message">Успешно зарегистрированно</div>
                </div>
            </div>
        </div>
    )
}