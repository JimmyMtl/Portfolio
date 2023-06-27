type Props = {
    className?: string
}
const Fr = ({className}: Props) => {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" focusable={false} aria-hidden={true}
             viewBox="0 0 150 90">
            <rect x="100" width="50" height="90" fill="#ed2939"/>
            <rect width="100" height="90" fill="#fff"/>
            <rect width="50" height="90" fill="#002395"/>
        </svg>
    );
};

export default Fr;