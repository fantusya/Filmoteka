import { refs } from './refs';

const changeBgColorBtn = refs.headerContainer.createElement('div');

changeBgColorBtn.innerHTML = `
<div class="switch">
<input id="on" type="radio" name="status" value="on" />
<label for="on">on</label>
<input
  id="off"
  type="radio"
  name="status"
  value="off"
  checked="checked"
/>
<label for="off">off</label>
</div>`;

export default class BgColorExportData {
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
