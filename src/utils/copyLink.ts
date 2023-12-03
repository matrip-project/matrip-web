export function copyLink() {
  navigator.clipboard.writeText(window.location.href);
  alert('복사 완료!'); //추후에 toast 등으로 변경 가능
}
