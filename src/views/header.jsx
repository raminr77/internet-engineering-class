


export const Header = () => {
    const headerItems = ['item1','item2','item3','item4']
    return (
        <div>
            <div className="header">
                {headerItems.map((item,index)=> (
                    <div key={index} className="header_item">
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}