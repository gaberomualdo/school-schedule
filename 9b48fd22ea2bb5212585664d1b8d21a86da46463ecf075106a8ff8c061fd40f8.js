// only history class

const schedule = [
  [
    {
      title: 'History',
      titleAbbr: 'His.',
      time: {
        start: '13:25',
        end: '14:15',
      },
    },
  ],
  [],
];

schedule.push(schedule[0].copy());
schedule.push(schedule[1].copy());
schedule.push(schedule[0].copy());

startTimer();
