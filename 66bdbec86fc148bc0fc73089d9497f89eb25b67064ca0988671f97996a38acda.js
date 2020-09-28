// only spanish

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
  ],
  [],
];

schedule.push(schedule[0].copy());
schedule.push(schedule[1].copy());
schedule.push(schedule[0].copy());

startTimer();
