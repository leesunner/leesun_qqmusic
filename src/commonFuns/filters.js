import moment from 'moment'
/**
 * 格式化时间
 * */
export const formatTime = (value) => {
    if(value==null) return ''
    return moment(value*1000).format(
        "YYYY-MM-DD HH:mm:ss"
    );
}
