import React from 'react'
import {Link} from 'react-router-dom';


export const Sidebar = () => {
  return (
    <div className='sidebar'>
        <ul>
            <li>
                < Link to="" className='btn btn-primary'>Inicio</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Consejos</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Crear tareas</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Cepas</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Calendario</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Mapa virtual</Link>
            </li>
            <li>
                < Link to="" className='btn btn-primary'>Usuarios</Link>
            </li>
        </ul>
    </div>
  )
}

