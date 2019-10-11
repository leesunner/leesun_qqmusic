import moment from 'moment'

/**
 * 格式化时间
 * @params value:时间（秒）formatType:时间转化格式类型（YYYY-MM-DD HH:mm:ss）
 * */
export const formatTime = (value, formatType) => {
  if (value == null || value == 0) return '00:00'
  return moment(value * 1000).format(formatType);
}
