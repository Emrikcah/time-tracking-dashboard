import exercise from '../assets/images/icon-exercise.svg'
import play from '../assets/images/icon-play.svg'
import selfCare from '../assets/images/icon-self-care.svg'
import social from '../assets/images/icon-social.svg'
import study from '../assets/images/icon-study.svg'
import work from '../assets/images/icon-work.svg'

export const data =[
  {
    id: 1,
    title: "Work",
    bgImg: work,
    bgColor:"hsl(15,100%,70%)",
    timeframes: {
      daily: {
        current: 5,
        previous: 7
      },
      weekly: {
        current: 32,
        previous: 36
      },
      monthly: {
        current: 103,
        previous: 128
      }
    }
  },
  {
    id: 2,
    title: "Play",
    bgImg: play,
    bgColor:"hsl(195,74%,62%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 2
      },
      weekly: {
        current: 10,
        previous: 8
      },
      monthly: {
        current: 23,
        previous: 29
      }
    }
  },
  {
    id: 3,
    title: "Study",
    bgImg: study,
    bgColor:"hsl(348, 100%, 68%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 7
      },
      monthly: {
        current: 13,
        previous: 19
      }
    }
  },
  {
    id: 4,
    title: "Exercise",
    bgImg: exercise,
    bgColor:"hsl(145, 58%, 55%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 1
      },
      weekly: {
        current: 4,
        previous: 5
      },
      monthly: {
        current: 11,
        previous: 18
      }
    }
  },
  {
    id: 5,
    title: "Social",
    bgImg: social,
    bgColor:"hsl(264, 64%, 52%)",
    timeframes: {
      daily: {
        current: 1,
        previous: 3
      },
      weekly: {
        current: 5,
        previous: 10
      },
      monthly: {
        current: 21,
        previous: 23
      }
    }
  },
  {
    id: 6,
    title: "Self Care",
    bgImg: selfCare,
    bgColor:"hsl(43, 84%, 65%)",
    timeframes: {
      daily: {
        current: 0,
        previous: 1
      },
      weekly: {
        current: 2,
        previous: 2
      },
      monthly: {
        current: 7,
        previous: 11
      }
    }
  }
]