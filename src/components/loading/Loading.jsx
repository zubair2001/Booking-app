import {TailSpin} from 'react-loader-spinner';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Loading = () => {
    return(
        <TailSpin
            height="80"
            width="80"
            color="#0071c2"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            styles={{flex:1,justifyContent:'center',alignItems:'center'}}
        />
    )
}

export default Loading;