// only calc

const schedule = [
  [],
  [
    {
      title: 'Calculus',
      titleAbbr: 'Calc.',
      time: {
        start: '14:00',
        end: '15:15',
      },
    },
  ],
  [],
];

schedule.push(schedule[1].copy());
schedule.push(schedule[0].copy());

startTimer();
