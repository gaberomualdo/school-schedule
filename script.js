Object.prototype.copy = function () {
  return JSON.parse(JSON.stringify(this));
};

const timeValues = [3600, 60, 1];
const timeNames = ['hours', 'minutes', 'seconds'];
const timeNamesSingular = ['hour', 'minute', 'second'];

const timeToS = (time) => {
  return time.map((e, i) => e * timeValues[i]).reduce((a, b) => a + b, 0);
};

const sToTime = (s) => {
  const values = [];
  timeValues.forEach((e) => {
    const value = Math.floor(s / e);
    values.push(value);
    s -= value * e;
  });
  return values;
};

const stringToTime = (s) => {
  const splitS = s.split(':').map((e) => parseInt(e));
  return timeToS([...splitS, 0]);
};

const timeToString = (s) => {
  return s.map((e) => ('0' + e).slice(-2)).join(':');
};

const timeToFullString = (time) => {
  const strArr = [];
  time.forEach((e, i) => {
    if (e === 0) {
      return;
    } else if (e === 1) {
      strArr.push(e + ' ' + timeNamesSingular[i]);
    } else {
      return strArr.push(e + ' ' + timeNames[i]);
    }
  });
  return strArr.join(' & ');
};

const updateText = (title, titleAbbr, desc, time) => {
  document.querySelector('.title').innerText = title;
  document.querySelector('.desc').innerText = desc;
  document.querySelector('.time').innerText = timeToFullString(time);
  document.title = `${titleAbbr} ${desc} ${timeToString(time)}`;
};
const updateTextStatus = (status) => {
  document.querySelector('.title').innerText = status;
  document.querySelector('.desc').innerText = '';
  document.querySelector('.time').innerText = '';
  document.title = status;
};

const update = () => {
  const d = new Date();
  const curS = timeToS([d.getHours(), d.getMinutes(), d.getSeconds()]);

  const schoolDayIdx = d.getDay() - 1;

  if (schoolDayIdx < 0 || schoolDayIdx >= schedule.length) {
    updateTextStatus('No Classes Today');
    return;
  }

  let nearestClassTitle = '';
  let nearestClassTitleAbbr = '';
  let sToNearestClass = 1000000;

  const todaysSchedule = schedule[schoolDayIdx];

  if (todaysSchedule.length === 0) {
    updateTextStatus('No Classes Today');
    return;
  }

  for (let idx = 0; idx < todaysSchedule.length; idx++) {
    const item = todaysSchedule[idx];

    const itemStartS = stringToTime(item.time.start);
    const itemEndS = stringToTime(item.time.end);
    console.log(itemStartS, curS, itemEndS);

    if (curS >= itemStartS && curS < itemEndS) {
      updateText(item.title, item.titleAbbr, 'ends in', sToTime(itemEndS - curS));
      return;
    }

    const sToClass = itemStartS - curS;

    if (sToClass > 0) {
      if (sToClass < sToNearestClass) {
        nearestClassTitle = item.title;
        nearestClassTitleAbbr = item.titleAbbr;
        sToNearestClass = sToClass;
      }
    }
  }

  updateText(nearestClassTitle, nearestClassTitleAbbr, 'starts in', sToTime(sToNearestClass));

  if (nearestClassTitle.length === 0) {
    updateTextStatus('All Classes Today Are Over');
    return;
  }
};

const startTimer = () => {
  update();
  setInterval(update, 250);
};

const loadScript = (url) => {
  var script = document.createElement('script');
  script.src = url;
  document.head.appendChild(script);
};
(() => {
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('p')) {
    updateTextStatus('Schedule Loading or Does Not Exist');
    loadScript(urlParams.get('p') + '.js');
  } else {
    updateTextStatus('No Schedule Selected');
  }
})();

window.addEventListener('load', () => {
  document.body.style.height = `${window.innerHeight}px`;
});
