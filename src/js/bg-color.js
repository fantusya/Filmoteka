import { refs } from './refs';
export { changeBgColorBtn, BgColorExportData };

console.log(refs.headerContainer);

function changeBgColorBtn() {
  const bgColorBtn = `
  <input id="on" type="radio" name="status" value="on" />
  <label for="on">on</label>
  <input id="off" type="radio" name="status" value="off"
  checked="checked"/>
  <label for="off">off</label>`;

  const changeBgColorBtn = document.createElement('div');
  changeBgColorBtn.classList.add('switch');
  refs.headerContainer.append(changeBgColorBtn);
    changeBgColorBtn.insertAdjacentHTML('beforeend', bgColorBtn);
}
changeBgColorBtn();

// export default
class BgColorExportData {
  constructor() {
    this.formData = {};
    this.STORAGE_KEY = 'bg-color-data';
  }

  populateData() {
    const savedData = localStorage.getItem(this.STORAGE_KEY);
    if (savedData) {
      this.formData = JSON.parse(savedData);
      document.body.dataset.switch = this.formData.status;

      // console.log(this.formData);

      if (this.formData.status === 'on') {
        refs.changeBgColorBtn[0].checked = 'checked';
      } else refs.changeBgColorBtn[1].checked = 'checked';
    }
  }

  onBgColorBtnClick(onClickData) {
    document.body.dataset.switch = onClickData.value;
    this.formData[onClickData.name] = onClickData.value;
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.formData));
  }
}
