import { useSyncExternalStore } from "react";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getClientSnapshot() {
  let storedId = localStorage.getItem("guest_cart_id");

  if (!storedId) {
    storedId = crypto.randomUUID();
    localStorage.setItem("guest_cart_id", storedId);
  }
  return storedId;
}

function getServerSnapshot() {
  return "";
}

export const useGuestId = () => {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
};
