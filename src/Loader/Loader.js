import Loader from 'react-loader-spinner';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"

class Loader extends React.Component {
    render() {
        return(
            <Loader
                type="Puff"
                height={50}
                width={50}
            />
        )
    }
}