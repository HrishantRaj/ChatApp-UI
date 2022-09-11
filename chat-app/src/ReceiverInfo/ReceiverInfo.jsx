import React from 'react'
import MyImage from '../defaultProfile.png'
import { useSelector } from 'react-redux'

export default function ReceiverInfo() {

  const { detail } = useSelector((state) => state.receiver);

  return (
    <>
      <div>
        {detail.first_name ? (
          <>
            <div style={{
              height: '25vh', display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <div>
                <img
                  src={detail.picture ? detail.picture : MyImage}
                  className="rounded-circle"
                  style={{ width: "6rem", height: "6rem", verticalAlign: 'center', horizontalAlign: 'center' }}
                />
              </div>
            </div>
            <div style={{ height: '75vh' }}>
              <div>
                <ul className='list-group'>
                  <li className='list-group-item' key='name'>
                    <h3>{detail?.first_name} {detail?.last_name}</h3>
                  </li>
                  <li className='list-group-item' key='phone'>
                    <h6>Phone: {detail?.phone}</h6>
                  </li>
                  <li className='list-group-item' key='email'>
                    <h6>Email: {detail?.email}</h6>
                  </li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <div
            className='align-self-stretch'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            Tap on a chat to get receiver's details...
          </div>
        )
        }
      </div>
    </>
  )
}
