import React from 'react'

export default function Plug() {
    return (
        <div>
            <div className="header">
                <div style={{ width: '50%' }}>
                    <div>
                        <h4 style={{ marginLeft: '15px' }}>Currently Charging</h4>
                    </div>

                </div>
                <div style={{ border: ' 0px solid black', display: 'flex', flexDirection: 'column', width: '50%', height: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '20px', marginLeft: '110px' }}>
                        <img style={{ border: ' 0px solid black', marginLeft: '10px', marginTop: 'px', width: '20%', height: '20px' }} src="assets/Download (1).svg" />
                        <img style={{ border: ' 0px solid black', marginLeft: '10px', marginTop: '0px', width: '30%', height: '20px' }} src="assets/Vector (4).svg" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'row', marginTop: '30px', marginLeft: '20px' }}>
                        <div style={{
                            background: '#3E9DCF',
                            width: '80px',
                            height: "25px",
                            borderRadius: '10px 0 0px 10px ',
                            border: '1px solid blue',
                            color: 'whitesmoke',
                            alignItems: 'center',
                            textAlign: 'center',
                        }}>Chart</div>
                        <div style={{
                            width: '80px',
                            height: "25px",
                            color: "blue",
                            alignItems: 'center',
                            textAlign: 'center',
                            textJustify: 'inherit',
                            border: '1px solid blue',
                            borderRadius: '0px 10px 10px 0px '
                        }}>Table</div>
                    </div>
                    <div style={{width:'100%'}}>
                    <img style={{ width:'50%', border: '0px solid blue',marginLeft: '-130px', marginTop: '30px', height: '60px', }} src="assets\Vector (27).svg" />
                    <img style={{ border: ' 0px solid black', border: '0px solid blue',marginLeft: '-20px', marginTop: '30px', height: '60px', }} src="assets\25 (1).svg" />
                    </div>
                </div>
            </div >
        </div>
    )
}
