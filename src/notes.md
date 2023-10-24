Pages:

- Introduction
  Greetings

- Skills & Qualifications
- History

- Easter Eggs
  List of easter eggs but have them as hidden boxes unless hidden interaction is triggered (state)

- Contact

animation tests:

<!-- Fade in and out -->
<!-- the arrays within x, opacity and times are all keyframes. the values in the time array must go from 0 to 1 -->

<motion.div
animate={{ x: [0, 5, 5, 5], opacity: [0, 1, 1, 0] }}
transition={{
    delay: 0.5,
    ease: 'anticipate',
    duration: 5,
    times: [0, 0.2, 0.9, 1],
  }}

> Front End Developer
> </motion.div>
