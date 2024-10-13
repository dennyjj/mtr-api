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

if (data.routeStatusRemarkContent === '停止服務') {
  const alert = new Alert();
  alert.title = data.routeStatusRemarkContent;
  alert.message = data.footerRemarks;

  presentAlert(alert);
}

//TODO: display the schedule

// Script.complete();
