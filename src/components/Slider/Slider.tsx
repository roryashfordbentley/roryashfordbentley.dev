'use client'

import React, { ComponentPropsWithRef, useCallback, useEffect, useState } from 'react'

import useEmblaCarousel from 'embla-carousel-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'
import styles from './Slider.module.css'

import { EmblaCarouselType } from 'embla-carousel'
import { ArrowButton } from '../ArrowButton/ArrowButton'

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

type Axis = 'x' | 'y'

export const Slider = ({ children }: { children: React.ReactElement<typeof Slide>[] }) => {
  const [forceWheelAxis, setForceWheelAxis] = useState<Axis | undefined>()
  const [target, setTarget] = useState<Element | undefined>()
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      align: 'start',
      loop: false,
      skipSnaps: true,
    },
    [
      WheelGesturesPlugin({
        forceWheelAxis,
        target,
      }),
    ],
  )

  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi)

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.container}>{children}</div>

      <div className={styles.buttons}>
        <ArrowButton
          onClick={onPrevButtonClick}
          disabled={prevBtnDisabled}
          title="Previous"
          type="prev"
        />

        <ArrowButton onClick={onNextButtonClick} disabled={nextBtnDisabled} title="Next" />
      </div>
    </div>
  )
}

export const Slide = ({ children }: { children: any }) => {
  return <div className={styles.slide}>{children}</div>
}
