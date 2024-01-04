import loading from '../../assets/loading.svg';
import loadingCircle from '../../assets/loading-circle.svg';

const Logo = () => {
  return (
    <div className="loading animate-pulse" data-loading>
      <img src={loading} width="55" height="55" alt="loading" className="img" />
      <img src={loadingCircle} width="70" height="70" alt="" className="circle" />
    </div>
  )
}

export default Logo
