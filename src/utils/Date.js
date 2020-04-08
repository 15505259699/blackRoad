export function formatDate(value) {
  let time = new Date(value);
  let result = [];
  let year = time.getFullYear();
  let month = addFormat(time.getMonth()+1);
  let day = addFormat(time.getDate());
  let hours = addFormat(time.getHours());
  let minutes = addFormat(time.getMinutes());
  let seconds = addFormat(time.getSeconds());
  return year+"-"+month+"-"+day+" "+hours+":"+month+":"+seconds
}
function addFormat(value) {
  if(value<9){
    return '0'+value
  }else{
    return value
  }
}
