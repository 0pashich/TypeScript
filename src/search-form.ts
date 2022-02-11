import { renderBlock } from './lib.js'

function formatedDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export interface SearchFormData {
  city: string
  checkInDate: string
  checkOutDate: string
  maxPrice: string
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Place { }

export function search(value: SearchFormData, callback) {
  console.log(value);
  setTimeout(() => {
    if (Math.random() > 0.5) {
      callback([]);
    } else {
      throw new Error('something went wrong')
    }
  }, 2000)
}


export function formHandler(callback, searchHandler) {
  document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    const data: SearchFormData = {
      city: event.target['city'].value,
      checkInDate: event.target['check-in-date'].value,
      checkOutDate: event.target['check-out-date'].value,
      maxPrice: event.target['max-price'].value
    }
    callback(data, searchHandler);
  });
}


export function renderSearchFormBlock(
  checkInDate: Date = new Date(Date.now() + 1000 * 60 * 60 * 24),
  checkOutDate: Date = new Date(+checkInDate + 1000 * 60 * 60 * 24 * 2)) {

  const today = new Date();
  const formatedMinDate = formatedDate(today);
  const formatedMaxDate = formatedDate(new Date(today.getFullYear(), today.getMonth() + 2, 0 + 1));
  const formatedCheckInDate = formatedDate(checkInDate);
  const formatedCheckOutDate = formatedDate(checkOutDate);

  renderBlock(
    'search-form-block',
    `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value="${formatedCheckInDate}" min="${formatedMinDate}" max="${formatedMaxDate}" name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value="${formatedCheckOutDate}" min="${formatedMinDate}" max="${formatedMaxDate}" name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
  )
}
