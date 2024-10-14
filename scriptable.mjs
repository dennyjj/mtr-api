const url = 'https://rt.data.gov.hk/v1/transport/mtr/bus/getSchedule';
const headers = {
  'Content-Type': 'application/json',
};
const FS_BUS_STOP_ID = 'K17-D010';

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

const bus = data.busStop.find((bs) => bs.busStopId === FS_BUS_STOP_ID);
console.log(bus);

const alert = new Alert();
alert.title = 'K17';
alert.message = bus[0].departureTimeText;
presentAlert(alert);

Script.complete();
