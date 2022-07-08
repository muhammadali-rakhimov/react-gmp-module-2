import React from 'react'
import clsx from 'clsx'
import styled from './styles.module.scss'
// eslint-disable-next-line import/extensions
import ResultCount from '../../base/ResultCount'
// eslint-disable-next-line import/extensions
import MoviesCard from './components/MoviesCard/MoviesCard.jsx'
import data from './data.js'

function MoviesCards() {
  return (
    <div className={clsx(styled.parent, 'pt-4')}>
      <div className="px-5 mb-4">
        <ResultCount number={39} />
      </div>
      <div className="d-flex">
        <div className="col-12">
          <div className="row mb-5 mt-2">
            {data.map((item) => (
              <MoviesCard
                key={item.id}
                item={item}
                src={item.src}
                name={item.name}
                type={item.type}
                year={item.year}
                text={item.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesCards
