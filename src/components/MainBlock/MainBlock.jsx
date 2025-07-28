import './mainblock.css'


export default function MainBlock() {
    return (
        <>
        <div className='flexContainer'>
           <div className='centeredBox'>
            <div className='number'>20</div>
            <hr style={{marginRight: '30px'}}/>
            <div className='number'>09</div>
            <hr style={{marginRight: '30px'}}/>
            <div className='number'>25</div>
           </div>
           <div>
            <div className='centeredBox' style={{marginTop: '70px'}}>
              <div className='text'>Никита</div>
              <div className='pasteText' style={{marginTop: '10px'}}>And</div>
              <div className='text' style={{marginTop: '10px'}}>Полина</div>
              <div className='pasteText' style={{marginTop: '15px'}}>Приглашаем на свадьбу</div>
              <div className='time_text'>17:00</div>
              <div className='adress_block'>
                <div className='text'>РЕСТОРАН "Adagio"</div>
                <div className='text'>ПР-Т. ЛЕНИНА. 3</div>
              </div>
           </div>
           </div>
        </div>
        </>
    )
}