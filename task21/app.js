// Создать конструктор формы.
// Поля формы должны передаваться в виде объектов. Сами объекты-поля должны создаваться с помощью классов. Сделать хотя бы 3 вида инпутов с помощью классов (текст, чекбокс, селект). Общие свойства и методы выносить в родительский класс и обязательно использовать наследование.


'use strict';

class BaseInput {
  constructor(tag, name, id, cssClass, label) {
    this.tag = tag;
    this.name = name;
    this.id = id;
    this.cssClass = cssClass;
    this.label = label;
  }
}

class TextInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, type, value) {
    super(tag, name, id, cssClass, label);
    this.type = type;
    this.value = value;
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('form-label');
    formItem.prepend(inputLabel);

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);
    formInput.setAttribute('type', this.type);
    formInput.setAttribute('value', this.value);
    formItem.append(formInput);
    return formItem;
  }
}

class RadioCheckInput extends TextInput {
  constructor(tag, name, id, cssClass, label, type, value) {
    super(tag, name, id, cssClass, label, type, value);
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');
    formItem.classList.add('inline-item');

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);
    formInput.setAttribute('type', this.type);
    formInput.setAttribute('value', this.value);
    formInput.setAttribute('checked', '');
    formItem.append(formInput);

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('inline-label');
    formItem.append(inputLabel);
    return formItem;
  }
}

class SelectInput extends BaseInput {
  constructor(tag, name, id, cssClass, label, selectOptions) {
    super(tag, name, id, cssClass, label);
    this.selectOptions = selectOptions;
  }
  generateNode() {
    const formItem = document.createElement('div');
    formItem.classList.add('form-item');

    const inputLabel = document.createElement('label');
    inputLabel.setAttribute('for', this.id);
    inputLabel.textContent = this.label;
    inputLabel.classList.add('form-label');
    formItem.prepend(inputLabel);

    const formInput = document.createElement(this.tag);
    formInput.setAttribute('name', this.name);
    formInput.setAttribute('id', this.id);
    formInput.classList.add(this.cssClass);

    this.selectOptions.forEach((option) => {
      const nodeOption = document.createElement('option');
      nodeOption.textContent = option;
      formInput.append(nodeOption);
    });

    formItem.append(formInput);
    return formItem;
  }
}

const formContainer = document.querySelector('.form-wrapper');

const nameInput = new TextInput('input', 'name', 'nameInput', 'text-input', 'Name', 'text', 'some name');
const surnameInput = new TextInput('input', 'surname', 'surnameInput', 'text-input', 'Surname', 'text', 'some surname');
const officeRadio = new RadioCheckInput('input', 'workPlace', 'radioOffice', 'radio-input', 'Work from office', 'radio', 'office');
const remoteRadio = new RadioCheckInput('input', 'workPlace', 'radioRemote', 'radio-input', 'Work from home', 'radio', 'home');
const englishCheck = new RadioCheckInput('input', 'isEng', 'checkEng', 'check-input', 'Knowledge of English', 'checkbox', 'yes');
const countrySelect = new SelectInput('select', 'country', 'countrySelect', 'select-country', 'Country', [
  'Ukraine',
  'Poland',
  'USA',
  'Great Britain',
  'Norway',
  'Australia',
  
]);

const arrayOfInputs = [nameInput, surnameInput, officeRadio, remoteRadio, englishCheck, countrySelect];

createForm(formContainer, arrayOfInputs,);

function createForm(formWrapper, objectsArray, formTitle) {
  const form = document.createElement('form');
  form.setAttribute('id', 'form');
  form.setAttribute('action', '#');
  formWrapper.append(form);

  objectsArray.forEach((item) => form.append(item.generateNode()));

  const button = document.createElement('button');
  button.classList.add('form-button');
  button.textContent = 'Submit';
  form.append(button);
}
