import { useState } from "react";

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([]);

  return {
    toast: (props: any) => {
      alert(`${props.title}\n${props.description}`);
    },
    toasts,
  };
}
