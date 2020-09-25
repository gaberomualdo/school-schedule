// full schedule

const schedule = [
  [
    {
      title: 'Spanish',
      titleAbbr: 'Span.',
      time: {
        start: '9:05',
        end: '9:55',
      },
    },
    {
      title: 'English',
      titleAbbr: 'Eng.',
      time: {
        start: '12:20',
        end: '13:10',
      },
    },
    {
      title: 'History',
      titleAbbr: 'His.',
      time: {
        start: '13:25',
        end: '14:15',
      },
    },
  ],
  [
    {
      title: 'Drama',
      titleAbbr: 'Dra.',
      time: {
        start: '11:00',
        end: '12:15',
      },
    },
    {
      title: 'Physics',
      titleAbbr: 'Phy.',
      time: {
        start: '12:30',
        end: '13:45',
      },
    },
    {
      title: 'Calculus',
      titleAbbr: 'Calc.',
      time: {
        start: '14:00',
        end: '15:15',
      },
    },
  ],
];

schedule.push(schedule[0].copy());
schedule.push(schedule[1].copy());
schedule.push(schedule[0].copy());
schedule[2].push({
  title: 'Advisory',
  titleAbbr: 'Adv.',
  time: {
    start: '12:00',
    end: '12:15',
  },
});

startTimer();
