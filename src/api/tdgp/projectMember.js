import { request } from '/src/config/Http.jsx';
import { baseUrl } from './config';

const configWrapper = (wrapperData) =>
  request({
    method: 'POST',
    url: `${baseUrl}/wrappers`,
    data: {
      bellMouthId: wrapperData.bellMouthId,
      kindId: wrapperData.kindId,
      tractionValue: wrapperData.tractionValue,
      points: wrapperData.points
    }
  });

const deleteWrapper = (wrapperId) =>
  request({
    method: 'DELETE',
    url: `${baseUrl}/wrappers?wrapperId=${wrapperId}`
  });

export default {
  configWrapper,
  deleteWrapper
};
