import Me from '../../../assets/avatars/Белый медведь малыш.jpg'
import ModeBut from './ModeBut/ModeBut'



const AccountInfoCard = () => {

    return ( 
        <div className='account_info_card-cont card_content-cont cont card'>
            <div className='mode-but_role-cont cont'>
                <ModeBut />
                <span className='account_role'>adm</span>
            </div>
            <div className='account_info-cont cont'>
                <span className='user_name'>Илья Юрьевич</span>
                <span className='user_job'>сис. админ</span>
            </div>
            <button className='account-img'>
                <img src={Me} alt="" />
            </button>
        </div>
     )
}
 
export default AccountInfoCard