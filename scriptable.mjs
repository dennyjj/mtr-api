const url = 'https://rt.data.gov.hk/v1/transport/mtr/bus/getSchedule';
const headers = {
  'Content-Type': 'application/json',
};

const response = await fetch(url, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    language: 'zh',
    routeName: 'K17',
  }),
});
const data = await response.json();

// Script.complete();
