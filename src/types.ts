export interface Root {
  appRefreshTimeInSecond: string;
  busStop: BusStop[];
  caseNumber: number;
  caseNumberDetail: string;
  footerRemarks: string;
  routeColour: string;
  routeName: string;
  routeStatus: string;
  routeStatusColour: string;
  routeStatusRemarkContent: any;
  routeStatusRemarkFooterRemark: string;
  routeStatusRemarkTitle: any;
  routeStatusTime: string;
  status: string;
}

export interface BusStop {
  bus: Bus[];
  busIcon?: string;
  busStopId: string;
  busStopRemark: any;
  busStopStatus: any;
  busStopStatusRemarkContent: any;
  busStopStatusRemarkTitle: any;
  busStopStatusTime: any;
  isSuspended: string;
}

export interface Bus {
  arrivalTimeInSecond: string;
  arrivalTimeText: string;
  busId: string;
  busLocation: BusLocation;
  busRemark: any;
  departureTimeInSecond: string;
  departureTimeText: string;
  isDelayed: string;
  isScheduled: string;
  lineRef: string;
}

export interface BusLocation {
  latitude: number;
  longitude: number;
}