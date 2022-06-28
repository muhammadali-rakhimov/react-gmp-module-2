import React from 'react'
import clsx from 'clsx'
import styled from './styles.module.scss'
// eslint-disable-next-line import/extensions
import ResultCount from '../../base/ResultCount'
// eslint-disable-next-line import/extensions
import MoviesCard from './components/MoviesCard/MoviesCard.jsx'
import card1 from '../../../public/img/card1.png'
import card2 from '../../../public/img/card2.png'
import card3 from '../../../public/img/card3.png'
import card4 from '../../../public/img/card4.png'
import card5 from '../../../public/img/card5.png'
import card6 from '../../../public/img/card6.png'

function MoviesCards() {
  return (
    <div className={clsx(styled.parent, 'pt-4')}>
      <div className="px-5 mb-4">
        <ResultCount number={39} />
      </div>
      <div className="d-flex">
        <div className="col-12">
          <div className="row mb-5 mt-2">
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card1}
                name="Pulp Fiction"
                type="Action & Adventure"
                year="2004"
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card2}
                name="Bohemian Rhapsody"
                type="Drama, Biography, Music"
                year="2003"
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card3}
                name="Kill Bill: Vol 2"
                type="Oscar winning Movie"
                year="1994"
              />
            </div>
          </div>
          <div className="row my-5">
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card4}
                name="Avengers: War of Infinity"
                type="Action & Adventure"
                year="2004"
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card5}
                name="Inception"
                type="Action & Adventure"
                year="2003"
              />
            </div>
            <div className="col-lg-4 col-lg-3 col-md-6 col-sm-12 col-xs-12 px-5">
              <MoviesCard
                src={card6}
                name="Reservoir dogs"
                type="Oscar winning Movie"
                year="1994"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoviesCards
