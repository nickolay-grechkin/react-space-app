export function BarItemsComponent ({ props }) {
    return (
        <div
            className='barItem'
            onClick={() => props.setActiveBarIndex(props.barIndex)}
        >
            <div className="pageNumber">
                {props.number}
            </div>
            <div className="pageName">
                {props.label}
            </div>
        </div>
    );
}