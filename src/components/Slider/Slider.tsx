'use client'

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'

import styles from './Slider.module.css'

import { EmblaCarouselType } from 'embla-carousel'

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined,
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on('reInit', onSelect).on('select', onSelect)
  }, [emblaApi, onSelect])

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  }
}

export const Slider = ({ children }: { children: React.ReactElement<typeof Slide>[] }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
  })

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.container}>{children}</div>
      <div className={styles.controls}>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={onPrevButtonClick} disabled={prevBtnDisabled}>
            Prev
          </button>
          <button className={styles.button} onClick={onNextButtonClick} disabled={nextBtnDisabled}>
            Next
          </button>
        </div>
      </div>
    </div>
  )
}

export const Slide = ({ children }: { children: any }) => {
  return <div className={styles.slide}>{children}</div>
}
