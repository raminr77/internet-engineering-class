


export const Header = ({counter}) => {
    return (
        <div>
            <div className="header">
                <div className="header_item"> 
                   مجتبی متولی 
                </div>
                <div className="header_item">
                    سبد شما: <span> {counter ? counter:0} </span>
                </div>
            </div>
        </div>
    );
}