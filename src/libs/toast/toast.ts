import Swal from "sweetalert2";

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 2000,
  timerProgressBar: true,
});

export const sucessToast = (title: string) => {
  Toast.fire({
    icon: "success",
    title: title,
  });
};

export const infoToast = (title: string) => {
  Toast.fire({
    icon: "info",
    title: title,
  });
};

export const errorToast = (title: string) => {
  Toast.fire({
    icon: "error",
    title: title,
  });
};
