import { toast } from "react-toastify";

export const onChange = (e, changeState) => {
  const input = e.target;
  const form = input.form;
  const value = input.type === "checkbox" ? input.checked : input.value;

  changeState((prev) => ({
    ...prev,
    [form.name]: {
      ...prev[form.name],
      [input.name]: value,
    },
  }));
};

export const handleTextLength = (text, length = 25) => {
  if (text.length > length) {
    return text.substring(0, length) + "...";
  } else {
    return text;
  }
};

export const isUndefined = (text) => {
  return text && text !== "" ? text : "N/A";
};

export const apiErrorHandler = (error) => {
  toast.error(error?.response?.data?.statusMessage || "An error occured");
};

export const handleDroppedDocument = function (
  event,
  inputName,
  formName,
  validTypes,
  changeState
) {
  event.stopPropagation();
  event.preventDefault();
  let { files } = event.dataTransfer;
  let targetFileUpdate = {};

  if (files[0]) {
    targetFileUpdate[inputName] = files[0];
  }
  if (!validTypes.includes(files[0].type)) {
    event.target.value = null;
    toast.error("Invalid File Fomat");
    return;
  }

  changeState((prev) => ({
    ...prev,
    [formName]: {
      ...prev[formName],
      ...targetFileUpdate,
    },
  }));
};
