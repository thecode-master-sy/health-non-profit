"use client"

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/lib/ui/toast"
import { useToast } from "@/components/lib/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription className="text-base text-green-600">{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose className="text-base text-gray-600"/>
          </Toast>
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
}