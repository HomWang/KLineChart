import { init } from 'klinecharts';

const chart = init('getDom-chart');

fetch('/datas/kline.json')
  .then(res => res.json())
  .then(dataList => { chart.applyNewData(dataList); });

const dom = chart.getDom({
  paneId: 'candle_pane',
  position: 'main'
})