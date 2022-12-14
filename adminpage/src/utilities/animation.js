export const homeVariant = {
  hidden: {
    opacity: 0,
    x: "-50vw",
  },
  visible: {
    opacity: 1,
    x: 0,
  },
  exit: {
    opacity: 0,
  },
  transition: {
    delay: 3,
    duration: 5,
  },
};

export const loginVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 5,
    },
  },
  exit: {
    opacity: 0,
    x: "-100vw",
    transition: {
      duration: 5,
    },
  },
};

export const blogerVariant = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,

    transition: {
      duration: 0.3,
    },
  },
};
