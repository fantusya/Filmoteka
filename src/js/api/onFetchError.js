import Spinner from '../components/spinner';
import { refs } from '../constants/refs';

const spinner = new Spinner();

export function onFetchError() {
  spinner.hide();

  const markup =
    '<p class="film-cards__error" data-key="responseError">Sorry, no response from server!</p>';
  refs.messageContainer.innerHTML = markup;
}
